import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './assets/fonts/generations/GenerationsPlain.woff2';
import './assets/fonts/plasmadrip/PlasmaDripBRK.woff2';
import './assets/fonts/powderworks/PowderworksBRK.woff2';

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
