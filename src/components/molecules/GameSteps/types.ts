import type { IStepProps } from '../../atoms/Step';

interface IGameStep {
  price: number;
  status: IStepProps['status'];
}

interface IGameStepsProps {
  className?: string;
  gameSteps: IGameStep[];
}

export type { IGameStepsProps, IGameStep };
