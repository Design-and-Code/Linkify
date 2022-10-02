import React from "react";
import { createRoot } from "react-dom/client";
import { LinkifyProvider } from "./context";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LinkifyProvider>
      <App />
    </LinkifyProvider>
  </React.StrictMode>
);
