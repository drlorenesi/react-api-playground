import React from 'react';
import ReactDOM from 'react-dom';
// To access the history object
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
