import type { IGameQuestion } from '../../../../store/slices/game';
import type { IAnswerOption } from '../../../molecules/AnswerOptions';

const normalizeAnswerOptions = (
  question: IGameQuestion,
  selectedOptions: string[],
  validate: boolean,
): IAnswerOption[] => {
  const answerOptions: IAnswerOption[] = [];

  question.answers.forEach((answer) => {
    let status: IAnswerOption['status'] = 'inactive';
    const includesOption = selectedOptions.includes(answer.option);

    if (includesOption && validate) {
      status = 'correct';
    } else if (includesOption && !validate) {
      status = 'selected';
    } else if (!includesOption && validate) {
      status = 'wrong';
    }

    const answerOption: IAnswerOption = {
      option: answer.option,
      answer: answer.answer,
      status,
    };

    answerOptions.push(answerOption);
  });

  return answerOptions;
};

export { normalizeAnswerOptions };
