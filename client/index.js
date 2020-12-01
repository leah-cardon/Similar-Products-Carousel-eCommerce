import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import IndexStyles from './IndexStyles.js';


ReactDOM.render(
  <IndexStyles>
    <App />
    <div id='portal'></div>
  </IndexStyles>
  , document.getElementById('suggested-products')
  );