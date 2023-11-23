# Hedwig Design System

Welcome to the Hedwig Design System – a comprehensive design system built to streamline the development process across Posten and Bring's projects.

## Usage

TBA. How to consume.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- pnpm

## Getting Started

Follow these steps to get the design system up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:bring/hedwig-design-system.git
   cd hedwig-design-system
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

To start the development server:

```bash
pnpm dev
```

[Storybook](https://storybook.js.org/) should now be available at [`localhost:6006`](http://localhost:6006). The [example app](apps/example/) should be available at [`localhost:5173`](http://localhost:5173).

## Publishing

TBA

## Developer guide lines

TBA.

## Updating dependencies

TODO: Setup dependabot

Use [`pnpm update`](https://pnpm.io/cli/update) to interactivly upgrade dependencies

```bash
pnpm update -i --latest -r
```
