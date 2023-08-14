import type { IAnswerOption } from './types';

const mockedInactiveAnswerOption: IAnswerOption = {
  option: 'I',
  question: 'Inactive',
  status: 'inactive',
};

const mockedSelectedAnswerOption: IAnswerOption = {
  option: 'S',
  question: 'Selected',
  status: 'selected',
};

const mockedCorrectAnswerOption: IAnswerOption = {
  option: 'C',
  question: 'Correct',
  status: 'correct',
};

const mockedWrongAnswerOption: IAnswerOption = {
  option: 'W',
  question: 'Wrong',
  status: 'wrong',
};

const mockedAnswerOptions: IAnswerOption[] = [
  mockedInactiveAnswerOption,
  mockedSelectedAnswerOption,
  mockedCorrectAnswerOption,
  mockedWrongAnswerOption,
];

export { mockedAnswerOptions };
