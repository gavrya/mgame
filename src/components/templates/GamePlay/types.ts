import type { IAnswerOptionsProps } from '../../molecules/AnswerOptions';
import type { IGameStepsProps } from '../../molecules/GameSteps';

interface IGamePlayProps {
  question: string;
  gameSteps: IGameStepsProps['gameSteps'];
  answerOptions: IAnswerOptionsProps['answerOptions'];
  onAnswerOptionSelect?: IAnswerOptionsProps['onAnswerOptionSelect'];
}

export type { IGamePlayProps };
