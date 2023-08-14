import type { IGameStep } from './types';

const mockedInactiveGameStep: IGameStep = {
  price: 100000,
  status: 'inactive',
};

const mockedCurrentGameStep: IGameStep = {
  price: 10000,
  status: 'current',
};

const mockedFinishedGameStep: IGameStep = {
  price: 100,
  status: 'finished',
};

const mockedGameSteps: IGameStep[] = [
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedInactiveGameStep,
  mockedCurrentGameStep,
  mockedFinishedGameStep,
  mockedFinishedGameStep,
  mockedFinishedGameStep,
];

export { mockedGameSteps };
