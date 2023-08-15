import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css';
// import App from './app/App';
import { GamePlay } from './components/templates/GamePlay';
import { mockedGamePlay } from './components/templates/GamePlay/gamePlay.mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GamePlay {...mockedGamePlay} />
  </React.StrictMode>,
);
