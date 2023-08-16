import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/router';

const ReactRouterProvider = () => <RouterProvider router={router} />;

export { ReactRouterProvider };
