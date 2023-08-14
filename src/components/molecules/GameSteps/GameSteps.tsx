import clsx from 'clsx';
import React from 'react';
import { Price } from '../../atoms/Price';
import { Step } from '../../atoms/Step';
import styles from './gameSteps.module.css';
import type { IGameStepsProps } from './types';

const GameSteps: React.FC<IGameStepsProps> = ({ className, gameSteps }) => (
  <div data-testid="game-steps" className={clsx(styles.wrapper, className)}>
    {gameSteps.map(({ status, price }) => (
      <Step key={price} status={status}>
        <Price>{price}</Price>
      </Step>
    ))}
  </div>
);

export { GameSteps };
