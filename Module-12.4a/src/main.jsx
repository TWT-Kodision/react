import React from "react";
import ReactDOM from "react-dom/client";
import { default as Library } from "./Library";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
