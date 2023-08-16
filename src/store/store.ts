import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { gameSlice } from './slices';

const store = configureStore({
  reducer: {
    gameSlice: gameSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
