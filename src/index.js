import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // or any other global styles
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
