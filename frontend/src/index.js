import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"





ReactDOM.render(
  <Provider store={store}>
     <App />, 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();