import React from 'react';
import { GameStartPage } from '../components/pages/GameStartPage';
import { GamePlayPage } from '../components/pages/GamePlayPage';
import { GameOverPage } from '../components/pages/GameOverPage';

const routes = [
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
  {
    path: '*',
    element: <div>NOT FOUND</div>,
  },
];

export { routes };
