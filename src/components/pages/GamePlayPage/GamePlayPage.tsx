import React from 'react';
import { GamePlay } from '../../templates/GamePlay';
import { useGamePlay } from './hooks/useGamePlay';

const GamePlayPage = () => {
  const { question, gameSteps, answerOptions, handleAnswerOptionSelect } =
    useGamePlay();

  return (
    <GamePlay
      question={question}
      gameSteps={gameSteps}
      answerOptions={answerOptions}
      onAnswerOptionSelect={handleAnswerOptionSelect}
    />
  );
};

export { GamePlayPage };
