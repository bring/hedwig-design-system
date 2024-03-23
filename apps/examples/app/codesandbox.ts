import { Example } from "./examples";

const html = '<div id="root"></div>';
const indexTsx = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
const tsConfig = `{
  "include": [
    "./src/**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [
      "dom",
      "esnext"
    ],
    "jsx": "react-jsx"
  }
}`;
const packageJson = `{
  "dependencies": {
    "@postenbring/hedwig-react": "latest",
    "react": "latest",
    "react-dom": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest"
  }
}`;

async function defineSandbox(example: Example) {
  const parameters = {
    template: "create-react-app-typescript",
    files: {
      "package.json": {
        content: packageJson,
        isBinary: false,
      },
      "tsconfig.json": {
        content: tsConfig,
        isBinary: false,
      },
      "src/app.tsx": {
        content: example.exampleSourceComplete,
        isBinary: false,
      },
      "src/index.tsx": {
        content: indexTsx,
        isBinary: false,
      },
      "index.html": {
        content: html,
        isBinary: false,
      },
    },
  };

  const url = `https://codesandbox.io/api/v1/sandboxes/define?json=1`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(parameters),
  });
  const responseJson = await response.json();
  return responseJson;
}

export async function openExampleInCodeSandbox(example: Example) {
  const { sandbox_id } = await defineSandbox(example);
  const url = new URL(`https://codesandbox.io/p/sandbox/${sandbox_id}`);
  url.searchParams.set("file", "/src/app.tsx");
  window.open(url, "_blank");
}
