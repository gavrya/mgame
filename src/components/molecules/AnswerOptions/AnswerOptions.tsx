import clsx from 'clsx';
import React from 'react';
import { OptionButton } from '../../atoms/OptionButton';
import styles from './answerOptions.module.css';
import type { IAnswerOptionsProps } from './types';

const AnswerOptions: React.FC<IAnswerOptionsProps> = ({
  className,
  answerOptions,
  onAnswerOptionSelect,
}) => (
  <div data-testid="answer-options" className={clsx(styles.wrapper, className)}>
    {answerOptions.map((answerOption) => {
      const { option, question, status } = answerOption;

      return (
        <OptionButton
          key={option}
          option={option}
          question={question}
          status={status}
          onClick={() => {
            onAnswerOptionSelect?.(answerOption);
          }}
        />
      );
    })}
  </div>
);

export { AnswerOptions };
