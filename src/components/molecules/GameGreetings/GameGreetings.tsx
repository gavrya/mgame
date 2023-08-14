import clsx from 'clsx';
import React from 'react';
import styles from './gameGreetings.module.css';
import type { IGameGreetingsProps } from './types';

const GameGreetings: React.FC<IGameGreetingsProps> = ({ className }) => (
  <div data-tesid="game-greetings" className={clsx(styles.wrapper, className)}>
    Who wants to be <br /> a millionaire?
  </div>
);

export { GameGreetings };
