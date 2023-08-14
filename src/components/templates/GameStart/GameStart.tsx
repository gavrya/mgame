import React from 'react';
import { GameInfo } from '../../organisms/GameInfo';
import { GameGreetings } from '../../molecules/GameGreetings';
import type { IGameStartProps } from './types';

const GameStart: React.FC<IGameStartProps> = ({ onStart }) => (
  <GameInfo withBackground buttonName="Start" onClick={onStart}>
    <GameGreetings />
  </GameInfo>
);

export { GameStart };
