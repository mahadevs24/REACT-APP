import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const element = <h1>Shri Ganeshay Namah!</h1>;
// console.log(element);
// reactDom.render(Counter, document.getElementById("root"));
