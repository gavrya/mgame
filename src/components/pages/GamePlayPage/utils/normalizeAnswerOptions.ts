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
    const { correctAnswerOptions } = question;
    const isOptionSelected = selectedOptions.includes(answer.option);
    const isOptionCorrect = correctAnswerOptions.includes(answer.option);

    if (validate) {
      if (isOptionCorrect) {
        status = 'correct';
      } else if (isOptionSelected) {
        status = 'wrong';
      }
    } else if (isOptionSelected) {
      status = 'selected';
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
