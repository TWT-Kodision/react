import React from "react";
import ReactDOM from "react-dom/client";
import { default as Library } from "./Library";
import Test from "./Test";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Library />
    <Test />
  </React.StrictMode>
);
