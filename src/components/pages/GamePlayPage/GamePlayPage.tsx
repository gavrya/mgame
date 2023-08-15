import React from 'react';
import { GamePlay } from '../../templates/GamePlay';
import { mockedGamePlay } from '../../templates/GamePlay/gamePlay.mock';
import type { IAnswerOption } from '../../molecules/AnswerOptions/types';

const GamePlayPage = () => {
  const handleAnswerOptionSelect = (answerOption: IAnswerOption) => {
    // eslint-disable-next-line no-console
    console.log('Answer option: ', answerOption);
  };

  return (
    <GamePlay
      {...mockedGamePlay}
      onAnswerOptionSelect={handleAnswerOptionSelect}
    />
  );
};

export { GamePlayPage };
