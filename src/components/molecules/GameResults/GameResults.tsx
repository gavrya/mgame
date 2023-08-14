import clsx from 'clsx';
import React from 'react';
import { Price } from '../../atoms/Price';
import styles from './gameResults.module.css';
import type { IGameResultsProps } from './types';

const GameResults: React.FC<IGameResultsProps> = ({ className, price }) => (
  <div data-testid="game-results" className={clsx(styles.wrapper, className)}>
    <span className={styles.score}>Total score:</span>
    <span className={styles.earned}>
      <Price>{price}</Price> earned
    </span>
  </div>
);

export { GameResults };
