import React from "react";
import ReactDOM from "react-dom/client";
import ReactComponentsKitchenSink from "./kitchen-sink.tsx";
import { TailwindExample } from "./tailwind-example/tailwind-example.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TailwindExample />
    <ReactComponentsKitchenSink />
  </React.StrictMode>,
);
