import type { IOptionButtonProps } from '../../atoms/OptionButton';

interface IAnswerOption {
  option: string;
  question: string;
  status: IOptionButtonProps['status'];
}

interface IAnswerOptionsProps {
  className?: string;
  answerOptions: IAnswerOption[];
  onAnswerOptionSelect?: (answerOption: IAnswerOption) => void;
}

export type { IAnswerOptionsProps, IAnswerOption };
