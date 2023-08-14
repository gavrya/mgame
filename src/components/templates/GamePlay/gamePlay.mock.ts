import { mockedGameSteps } from '../../molecules/GameSteps/gameSteps.mock';
import { mockedAnswerOptions } from '../../molecules/AnswerOptions/answerOptions.mock';
import type { IGamePlayProps } from './types';

const mockedGamePlay: IGamePlayProps = {
  question:
    'How old your elder brother was 10 years before you was born, mate?',
  gameSteps: mockedGameSteps,
  answerOptions: mockedAnswerOptions,
};

export { mockedGamePlay };
