import type { IAnswerOptionsProps } from '../../molecules/AnswerOptions';

interface IGameQuizProps {
  className?: string;
  question: string;
  answerOptions: IAnswerOptionsProps['answerOptions'];
  onAnswerOptionSelect?: IAnswerOptionsProps['onAnswerOptionSelect'];
}

export type { IGameQuizProps };
