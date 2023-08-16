import type { IGameQuestion } from '../../../../store/slices/game';
import type { IGameStep } from '../../../molecules/GameSteps';

const normalizeGameSteps = (
  questions: IGameQuestion[],
  questionIndex: number,
): IGameStep[] => {
  const gameSteps: IGameStep[] = [];

  questions.forEach((question, index) => {
    let status: IGameStep['status'] = 'inactive';

    if (questionIndex < index) {
      status = 'finished';
    } else if (questionIndex === index) {
      status = 'current';
    }

    const gameStep: IGameStep = {
      price: question.price,
      status,
    };

    gameSteps.unshift(gameStep);
  });

  return gameSteps;
};

export { normalizeGameSteps };
