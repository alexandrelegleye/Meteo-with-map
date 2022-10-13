import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { RecoilRoot} from "recoil";

import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot >
    <BrowserRouter>
      <header className="App-header">
        <App />
      </header>
    </BrowserRouter>
  </RecoilRoot>
);
