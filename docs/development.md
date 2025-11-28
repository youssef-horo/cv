# Development Guide

This guide covers development setup, testing, and linting.

## Prerequisites

- Node.js 20+ 
- npm or yarn

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Testing

The project uses [Vitest](https://vitest.dev/) for unit testing with [React Testing Library](https://testing-library.com/react).

### Running Tests

```bash
# Run tests in watch mode (recommended for development)
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run build and tests (for CI/CD)
npm run test:build
```

### Test Structure

Tests are located in `src/app/__tests__/`:
- `page.test.tsx` - Tests for the main page component
- `layout.test.tsx` - Tests for the root layout

Test setup is configured in `src/test/setup.ts`.

### Writing Tests

Example test structure:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Component from '../component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## Linting

The project uses ESLint with Next.js configuration.

### Running Linter

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### ESLint Configuration

ESLint is configured via Next.js's built-in configuration. The project uses:
- `next/core-web-vitals` - Next.js recommended rules
- `next/typescript` - TypeScript-specific rules

Note: ESLint is currently disabled during builds due to compatibility issues between `eslint-config-next@16.0.3` and ESLint 9. This doesn't affect development or testing.

## Project Structure

```
.
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── __tests__/    # Component tests
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── test/             # Test setup files
├── public/                # Static assets
├── docs/                  # Documentation
├── vitest.config.mjs      # Vitest configuration
└── package.json
```

## Scripts

Available npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run test:build` - Build and run tests

## TypeScript

The project uses TypeScript with strict type checking. Configuration is in `tsconfig.json`.

## Styling

The project uses TailwindCSS for styling. Configuration is in `tailwind.config.js`.

