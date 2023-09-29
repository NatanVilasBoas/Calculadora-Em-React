import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Calculadora from "./main/calculator";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Calculadora</h1>
    <Calculadora />
  </StrictMode>
);
