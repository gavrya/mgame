import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameOver } from '../../templates/GameOver';

const GameOverPage = () => {
  const navigate = useNavigate();
  const price = 8000;

  const handleGameRetry = () => {
    navigate('/play');
  };

  return <GameOver price={price} onRetry={handleGameRetry} />;
};

export { GameOverPage };
