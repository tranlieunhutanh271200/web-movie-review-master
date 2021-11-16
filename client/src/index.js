import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

const element = (
  <Router>
    <App />
  </Router>
);
const container = document.getElementById('root');

ReactDOM.render(element, container);
