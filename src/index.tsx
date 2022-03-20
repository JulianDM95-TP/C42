import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Background } from "./Components/Layout/Background";
import "./index.css";
import { RouterHandler } from "./Routes/RouterHandler";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Background>
        <RouterHandler />
      </Background>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
