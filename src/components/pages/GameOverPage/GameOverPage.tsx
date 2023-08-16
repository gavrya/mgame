import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameOver } from '../../templates/GameOver';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { actions } from '../../../store/slices/game';

const GameOverPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const gameSliceState = useAppSelector((state) => state.gameSlice);
  const price = gameSliceState.totalPrice;

  const handleGameRetry = () => {
    dispatch(actions.reset());
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!gameSliceState.isFinished) {
      navigate('/', { replace: true });
    }
  }, [gameSliceState.isFinished]);

  return <GameOver price={price} onRetry={handleGameRetry} />;
};

export { GameOverPage };
