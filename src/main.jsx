import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BmiProvider } from "./assets/providers/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BmiProvider>
      <App />
    </BmiProvider>
  </React.StrictMode>
);
