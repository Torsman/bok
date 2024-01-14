import { applyTheme } from './components/ApplyTheme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


applyTheme(true);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

