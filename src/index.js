import React from "react";
import ReactDOM from "react-dom";
import { LinkifyProvider } from "./context";
import App from "./App";

function Main() {
  return (
    <React.StrictMode>
      <LinkifyProvider>
        <App />
      </LinkifyProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
