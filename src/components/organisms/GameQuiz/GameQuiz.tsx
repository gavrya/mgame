import clsx from 'clsx';
import React from 'react';
import { AnswerOptions } from '../../molecules/AnswerOptions';
import styles from './gameQuiz.module.css';
import type { IGameQuizProps } from './types';

const GameQuiz: React.FC<IGameQuizProps> = ({
  className,
  question,
  answerOptions,
  onAnswerOptionSelect,
}) => (
  <div data-testid="game-quiz" className={clsx(styles.wrapper, className)}>
    <div className={styles.questionSection}>
      <div className={styles.question}>{question}</div>
    </div>
    <div className={styles.answerSection}>
      <AnswerOptions
        answerOptions={answerOptions}
        onAnswerOptionSelect={onAnswerOptionSelect}
      />
    </div>
  </div>
);

export { GameQuiz };
