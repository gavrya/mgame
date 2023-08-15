import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameStart } from '../../templates/GameStart';

const GameStartPage = () => {
  const navigate = useNavigate();

  const handleGameStart = () => {
    navigate('/play');
  };

  return <GameStart onStart={handleGameStart} />;
};

export { GameStartPage };
