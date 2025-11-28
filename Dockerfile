# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Set build-time environment variables (but NOT NODE_ENV=production yet, as we need devDependencies)
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies in a separate layer for better caching
# Copy only package files first to leverage Docker layer caching
COPY package.json package-lock.json* ./

# Update npm to specific version (11.6.4)
RUN npm install -g npm@11.6.4

# Install dependencies including devDependencies (needed for build: tailwindcss, postcss, etc.)
# --prefer-offline: Use cache if available
# --no-audit: Skip security audit (faster, we do this in CI)
# --no-fund: Skip funding messages
# --legacy-peer-deps: Handle peer dependency issues
# Note: We don't use --no-optional here as it might skip required dependencies
RUN --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps --prefer-offline --no-audit --no-fund || \
    (echo "First install attempt failed, retrying..." && sleep 2 && npm ci --legacy-peer-deps --prefer-offline --no-audit --no-fund)

# Install Next.js SWC binary explicitly to avoid download during build
# This prevents network issues during the build process
RUN npm install @next/swc-linux-arm64-gnu @next/swc-linux-x64-gnu --save-optional --legacy-peer-deps || echo "SWC binaries installation failed, will download during build"

# Copy source code (node_modules is excluded by .dockerignore)
# This layer is cached unless source code changes
COPY . .

# Build the application with Next.js build cache
# Set NODE_ENV=production only for the build (Next.js optimizes for production)
# Using standalone output for smaller production image
# Retry build if SWC download fails (network issues)
RUN NODE_ENV=production npm run build || (echo "Build failed, retrying in 5 seconds..." && sleep 5 && NODE_ENV=production npm run build) || (echo "Build failed again, retrying in 10 seconds..." && sleep 10 && NODE_ENV=production npm run build)

# Stage 2: Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files with correct ownership
# In standalone mode, Next.js creates a minimal server.js and dependencies
# The standalone output already includes the necessary structure
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to non-root user
USER nextjs

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "server.js"]
