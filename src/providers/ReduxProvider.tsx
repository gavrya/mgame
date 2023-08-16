import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

interface IReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: IReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxProvider };
