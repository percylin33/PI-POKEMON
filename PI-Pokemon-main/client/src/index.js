import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
 
<Provider store={store}>
    <BrowserRouter>
    <Switch>
        <App />
    </Switch>

    </BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
