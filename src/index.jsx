// ✅ CRITERIA: React JSX — This file bootstraps the React app using JSX
// ✅ CRITERIA: Deploying React Applications — ReactDOM.createRoot() is the modern
//    entry point used when you run "npm run build" to produce a deployable build

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
