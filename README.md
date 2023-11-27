# Hedwig Design System

Welcome to the Hedwig Design System – a comprehensive design system built to streamline the development process across Posten and Bring's projects.

## Usage

Storybook: https://bring.github.io/hedwig-design-system/

This package has three packages

- `@postenbring/tokens`
- `@postenbring/css`
- `@postenbring/react`

### Getting started

The simplest way is to just install the `@postenbring/hedwig-react` package, and start using the components. The css is imported in the javascript files so a bundler that supports side effect imports are required. Vite and Remix supports this out of the box.

```tsx
import {
  Box,
  PrimaryButton,
} from "@postenbring/hedwig-react";

export function MyComponent() {
  return (
    <Box>
      <PrimaryButton>Hello, World</PrimaryButton>
    </Box>
  )
}
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or higher)
- pnpm (v8 or higher)

### Install node

Use [`fnm`](https://github.com/Schniz/fnm), [`asdf`](https://github.com/asdf-vm/asdf) or [`nvm`](https://github.com/nvm-sh/nvm) to ensure you have node 20.


### Install pnpm

There are multiple ways to [install pnpm](https://pnpm.io/installation), one is through npm:

```bash
npm install -g pnpm
```

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
