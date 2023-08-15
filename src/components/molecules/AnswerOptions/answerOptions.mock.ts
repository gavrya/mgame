import type { IAnswerOption } from './types';

const mockedInactiveAnswerOption: IAnswerOption = {
  option: 'I',
  answer: 'Inactive',
  status: 'inactive',
};

const mockedSelectedAnswerOption: IAnswerOption = {
  option: 'S',
  answer: 'Selected',
  status: 'selected',
};

const mockedCorrectAnswerOption: IAnswerOption = {
  option: 'C',
  answer: 'Correct',
  status: 'correct',
};

const mockedWrongAnswerOption: IAnswerOption = {
  option: 'W',
  answer: 'Wrong',
  status: 'wrong',
};

const mockedAnswerOptions: IAnswerOption[] = [
  mockedInactiveAnswerOption,
  mockedSelectedAnswerOption,
  mockedCorrectAnswerOption,
  mockedWrongAnswerOption,
];

export { mockedAnswerOptions };
