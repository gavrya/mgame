import jsonConfig from './gameConfig.json';
import type { IGameQuestion } from '../store/slices/game';

interface IGameConfig {
  questions: IGameQuestion[];
}

const gameConfig: IGameConfig = jsonConfig;

gameConfig.questions.sort(
  (questionA, questionB) => questionA.price - questionB.price,
);

export { gameConfig };

export type { IGameConfig };
