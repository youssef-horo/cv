# Deployment Guide

This guide covers Docker deployment, Nginx Proxy Manager integration, and CI/CD setup.

## Docker

### Build Script

The project includes a `build.sh` script that builds the Docker image with a customizable tag.

**Usage:**

```bash
# Build with default tag (latest)
./build.sh

# Build with custom tag
IMAGE_TAG=v1.0.0 ./build.sh

# Or export the variable first
export IMAGE_TAG=v1.0.0
./build.sh
```

The script will:
- Build the image with the specified tag (or `latest` if not provided)
- Also tag the image as `latest` if a specific tag was provided

### Build and Run with Docker

**Manual build:**
```bash
docker build -t yhoro-website .
docker run -d -p 8080:8080 --name yhoro-website yhoro-website
```

**Using build script:**
```bash
./build.sh
docker run -d -p 8080:8080 --name yhoro-website yhoro-website:latest
```

**Flags:**
- `-d` - Run container in detached mode (background)
- `-p 8080:8080` - Map port 8080
- `--name yhoro-website` - Give container a name for easier management

### Using Docker Compose

**Build and start:**
```bash
# Build with default tag (latest)
./build.sh
docker compose up -d

# Build with custom tag and use it in docker compose
IMAGE_TAG=v1.0.0 ./build.sh
IMAGE_TAG=v1.0.0 docker compose up -d
```

The `docker-compose.yml` file uses the `IMAGE_TAG` environment variable to determine which image tag to use. If not set, it defaults to `latest`.

**Start existing image:**
```bash
docker compose up -d
```

The site will be available at [http://localhost:8080](http://localhost:8080).

## Integration with Nginx Proxy Manager

If you're using Nginx Proxy Manager (NPM) as a reverse proxy, you need to connect the container to the same Docker network as NPM.

### Step 1: Find the NPM Network Name

```bash
docker network ls
```

Look for a network like `nginxproxymanager_default`, `npm_default`, or similar.

### Step 2: Run Container in NPM Network

**Option A: Using docker run**

```bash
docker run -d \
  --name yhoro-website \
  --network nginxproxymanager_default \
  yhoro-website
```

Replace `nginxproxymanager_default` with your actual NPM network name.

**Option B: Using docker compose**

1. Build the image (with optional tag):
```bash
./build.sh
# Or with custom tag:
IMAGE_TAG=v1.0.0 ./build.sh
```

2. Start the container:
```bash
docker compose up -d
# Or with custom tag:
IMAGE_TAG=v1.0.0 docker compose up -d
```

The `docker-compose.yml` automatically uses the `IMAGE_TAG` environment variable if set, otherwise defaults to `latest`.

### Step 3: Configure Nginx Proxy Manager

1. Log in to Nginx Proxy Manager web interface
2. Go to **Hosts** → **Proxy Hosts** → **Add Proxy Host**
3. Configure:
   - **Domain Names:** Your domain (e.g., `cv.yhoro.de`)
   - **Forward Hostname/IP:** `yhoro-website` (container name, not localhost!)
   - **Forward Port:** `8080`
   - **Forward Scheme:** `http`
   - **Cache Assets:** Enable if desired
   - **Block Common Exploits:** Enable
   - **Websockets Support:** Enable if needed

4. **SSL/HTTPS:** Go to the **SSL** tab and configure your SSL certificate

### Troubleshooting 502 Bad Gateway

If you get a 502 Bad Gateway error:

1. **Check if container is running:**
   ```bash
   docker ps | grep yhoro-website
   ```

2. **Check container logs:**
   ```bash
   docker logs yhoro-website
   ```

3. **Verify network connectivity:**
   ```bash
   # Find NPM container name
   docker ps | grep nginx-proxy-manager
   
   # Test connectivity from NPM container
   docker exec -it <npm-container-name> ping yhoro-website
   ```

4. **Verify network membership:**
   ```bash
   docker inspect yhoro-website | grep -A 10 Networks
   ```

5. **Common issues:**
   - Container not in the same network → Add `--network <npm-network-name>`
   - Wrong hostname in NPM → Use container name `yhoro-website`, not `localhost`
   - Container not running → Check with `docker ps`
   - Port mismatch → Verify container listens on port 8080

## Container Management

```bash
# View running containers
docker ps

# View logs
docker logs yhoro-website

# Follow logs in real-time
docker logs -f yhoro-website

# Stop container
docker stop yhoro-website

# Start stopped container
docker start yhoro-website

# Restart container
docker restart yhoro-website

# Remove container
docker rm yhoro-website

# Remove container and image
docker rm yhoro-website && docker rmi yhoro-website
```

## CI/CD

The project includes CI/CD pipelines for both GitHub Actions and GitLab CI.

### GitHub Actions

GitHub Actions provides a complete CI/CD pipeline that runs on every push and pull request.

#### Workflows

1. **CI Pipeline** (`.github/workflows/ci.yml`):
   - **Lint**: Runs ESLint to check code quality
   - **Test**: Runs all unit tests with Vitest
   - **Build**: Builds the Next.js application
   - **Security Audit**: Checks for npm vulnerabilities

   Runs on: `push` to main/develop, `pull_request`, and `workflow_dispatch`

2. **Docker Build & Push** (`.github/workflows/docker.yml`):
   - Builds Docker image
   - Pushes to GitHub Container Registry (ghcr.io)
   - Supports multi-platform builds (amd64, arm64)
   - Images are stored as **private** by default

   Runs on: `push` to main, tags (v*.*.*), and `workflow_dispatch`

#### Image Storage

**Location:** GitHub Container Registry (`ghcr.io`)

**Note:** `ghcr.io` is GitHub's Container Registry - it's part of GitHub, just a separate service. Your images are stored in your GitHub account, accessible through the GitHub Packages feature.

**Full Image Path:** `ghcr.io/youssef-horo/website:latest`

**Visibility:** 
- Images are stored as **private** by default
- Only you (and repository collaborators) can access them
- You can change visibility manually in GitHub: Settings → Packages → Package name → Package settings → Change visibility

**Pull the image (private):**
```bash
# Login required for private images
docker login ghcr.io -u USERNAME -p TOKEN

# Pull the image
docker pull ghcr.io/youssef-horo/website:latest
docker pull ghcr.io/youssef-horo/website:v1.0.0
```

**How to get a GitHub Personal Access Token (PAT):**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `read:packages` and `write:packages`
4. Use the token as password when logging in: `docker login ghcr.io -u YOUR_USERNAME -p YOUR_TOKEN`

**Access via GitHub UI:**
- Go to your GitHub repository
- Click on "Packages" in the right sidebar
- Or go to: `https://github.com/users/youssef-horo/packages/container/package/website`

#### How to use:

1. **Automatic CI on push:**
   - Push to main or develop branch
   - CI pipeline runs automatically
   - Check results in GitHub Actions tab

2. **Create a release:**
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```
   - Docker image is automatically built and pushed to `ghcr.io`
   - Image is stored as **private** (only accessible to you)

3. **Manual Docker build:**
   - Go to Actions → Docker Build & Push → Run workflow
   - Enter custom tag (optional)
   - Workflow runs manually

### GitLab CI/CD

The project also includes a GitLab CI/CD pipeline (`.gitlab-ci.yml`) that automatically builds and pushes Docker images to the GitLab Container Registry when a tag is created.

#### How to use:

1. Create a tag:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. The pipeline will automatically:
   - Build the Docker image
   - Tag it with the Git tag (e.g., `v1.0.0`)
   - Also tag it as `latest`
   - Push both tags to GitLab Container Registry

3. Pull the image from GitLab Container Registry:
   ```bash
   docker login registry.gitlab.com
   docker pull registry.gitlab.com/<your-group>/<your-project>:v1.0.0
   ```

The image will be available at: `$CI_REGISTRY_IMAGE:<tag>`
