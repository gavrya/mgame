import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css';
// import App from './app/App';
import { GameOver } from './components/templates/GameOver';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GameOver price={8000} />
  </React.StrictMode>,
);
