import { includesAll } from '../../shared/utils/includesAll';
import { delay } from '../../shared/utils/delay';
import { actions } from '../slices/game';
import type { IGameState } from '../slices/game';
import type { AppDispatch, GetState } from '../store';

const processAnswerOption =
  (selectedOption: string) =>
  async (dispatch: AppDispatch, getState: GetState) => {
    const rootState = getState();
    const gameSliceState: IGameState = rootState.gameSlice;
    const {
      questions,
      questionIndex,
      selectedOptions,
      isFinished,
      isValidating,
    } = gameSliceState;

    if (isFinished) {
      return;
    }

    if (isValidating) {
      return;
    }

    if (selectedOptions.includes(selectedOption)) {
      return;
    }

    const currentQuestion = questions[questionIndex];
    const { correctAnswerOptions, price } = currentQuestion;
    const providedOptions = [...selectedOptions, selectedOption];

    if (correctAnswerOptions.length > selectedOptions.length) {
      dispatch(actions.selectedOptions(providedOptions));

      if (correctAnswerOptions.length !== providedOptions.length) {
        return;
      }

      dispatch(actions.isValidating(true));
      await delay(1000);

      if (!includesAll(correctAnswerOptions, providedOptions)) {
        dispatch(actions.isValidated(true));
        await delay(1000);
        dispatch(actions.isFinished(true));
        return;
      }

      const nextIndex = questionIndex + 1;

      dispatch(actions.totalPrice(gameSliceState.totalPrice + price));
      dispatch(actions.isValidating(false));
      dispatch(actions.isValidated(true));
      await delay(1000);

      if (nextIndex > questions.length - 1) {
        dispatch(actions.isFinished(true));
      } else {
        dispatch(actions.questionIndex(nextIndex));
        dispatch(actions.selectedOptions([]));
        dispatch(actions.isValidated(false));
      }
    }
  };

export { processAnswerOption };
