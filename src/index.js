import React from 'react';
import ReactDOM from 'react-dom/client';
import EternityVision from './Eternity_vision';
import './style/global.scss'
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <EternityVision />
    </HashRouter>
  </React.StrictMode>
);

