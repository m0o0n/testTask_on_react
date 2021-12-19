import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Common/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Router, Routes, Switch} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import Article from './Components/Article/Article';
import Home from './Components/Home/Home';
ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
    <App />
    
    </Provider>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
