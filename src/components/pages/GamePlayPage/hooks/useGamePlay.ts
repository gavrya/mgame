import { useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/redux';
import { actions } from '../../../../store/slices/game';
import { normalizeGameSteps } from '../utils/normalizeGameSteps';
import { normalizeAnswerOptions } from '../utils/normalizeAnswerOptions';
import type { IAnswerOption } from '../../../molecules/AnswerOptions';

const useGamePlay = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const gameSliceState = useAppSelector((state) => state.gameSlice);
  const { questions, questionIndex, selectedOptions, isValidated } =
    gameSliceState;
  const currentQuestion = questions[questionIndex];
  const { question } = currentQuestion;

  const gameSteps = useMemo(
    () => normalizeGameSteps(questions, questionIndex),
    [questions, questionIndex],
  );

  const answerOptions = useMemo(
    () => normalizeAnswerOptions(currentQuestion, selectedOptions, isValidated),
    [currentQuestion, selectedOptions, isValidated],
  );

  const handleAnswerOptionSelect = useCallback(
    (answerOption: IAnswerOption) => {
      dispatch(actions.acceptOption(answerOption.option));
      dispatch(actions.checkOptions());
    },
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      if (gameSliceState.isFinished) {
        navigate('/results', { replace: true });
      }
    }, 2000);
  }, [gameSliceState.isFinished]);

  useEffect(() => {
    dispatch(actions.reset());
  }, []);

  return {
    question,
    gameSteps,
    answerOptions,
    handleAnswerOptionSelect,
  };
};

export { useGamePlay };
