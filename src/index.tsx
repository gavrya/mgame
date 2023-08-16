import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css';
import { ReduxProvider } from './providers/ReduxProvider';
import { ReactRouterProvider } from './providers/ReactRouterProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <ReactRouterProvider />
    </ReduxProvider>
  </React.StrictMode>,
);
