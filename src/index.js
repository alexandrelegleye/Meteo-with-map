import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <header className="App-header">
      <App />
    </header>
  </BrowserRouter>
);
