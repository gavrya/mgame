import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css';
// import App from './app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GameStartPage } from './components/pages/GameStartPage';
import { GamePlayPage } from './components/pages/GamePlayPage';
import { GameOverPage } from './components/pages/GameOverPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameStartPage />,
  },
  {
    path: '/play',
    element: <GamePlayPage />,
  },
  {
    path: '/results',
    element: <GameOverPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
