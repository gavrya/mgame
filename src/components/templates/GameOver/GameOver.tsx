import React from 'react';
import { GameInfo } from '../../organisms/GameInfo';
import { GameResults } from '../../molecules/GameResults';
import type { IGameOverProps } from './types';

const GameOver: React.FC<IGameOverProps> = ({ price, onRetry }) => (
  <GameInfo buttonName="Try again" onClick={onRetry}>
    <GameResults price={price} />
  </GameInfo>
);

export { GameOver };
