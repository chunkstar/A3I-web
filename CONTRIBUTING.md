# Contributing to AgentAnchor

First off, thank you for considering contributing to AgentAnchor! It's people like you that make AgentAnchor a reality.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the proposed enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** and ensure tests pass
4. **Write clear commit messages** following our conventions
5. **Create a Pull Request** with a clear description

## Development Setup

### Prerequisites

- Node.js 18+
- npm or pnpm
- Git

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/agentanchor.git
cd agentanchor

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run type checking
npm run typecheck
```

### Code Style

We use ESLint and Prettier to maintain code quality:

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Commit Message Guidelines

We follow conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(auth): add password strength meter
fix(trust-score): correct decay calculation
docs(readme): update installation instructions
```

## Project Structure

```
agentanchor/
├── app/                    # Next.js app router
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   └── dashboard/         # Main application
├── components/            # React components
│   ├── ui/               # Base UI components
│   └── features/         # Feature-specific components
├── lib/                   # Utilities and helpers
│   ├── db/               # Database schemas
│   └── auth/             # Auth utilities
├── docs/                  # Documentation
└── public/               # Static assets
```

## Architecture Decisions

When proposing significant changes, please:

1. Open a discussion first
2. Describe the problem and proposed solution
3. Consider alternatives
4. Get feedback before implementing

## Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, a maintainer will merge

## Recognition

Contributors are recognized in:
- The project README
- Release notes
- Our Contributors page

## Questions?

- Open a [Discussion](https://github.com/agentanchor/agentanchor/discussions)
- Join our [Discord](https://discord.gg/agentanchor)
- Email: contributors@agentanchorai.com

---

Thank you for contributing to AI governance!
