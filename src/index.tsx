import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Background } from "./Components/Layout/Background";
import "./index.css";
import { PagesRouter } from "./Routes/PagesRouter";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Background>
        <PagesRouter />
      </Background>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
