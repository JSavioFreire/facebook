import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PreIndex from'./preIndex/preIndex'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PreIndex/>
  </React.StrictMode>
);

reportWebVitals();
