import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import App from "./App";
import "./assets/css/main.css"; // Ensure styles are correctly imported
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
