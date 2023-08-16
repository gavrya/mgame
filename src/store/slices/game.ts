import { createSlice } from '@reduxjs/toolkit';
import { gameConfig } from '../../config';
import { includesAll } from '../../shared/utils/includesAll';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IGameAnswer {
  option: string;
  answer: string;
}

interface IGameQuestion {
  question: string;
  price: number;
  answers: IGameAnswer[];
  correctAnswerOptions: string[];
}

interface IGameState {
  questions: IGameQuestion[];
  totalPrice: number;
  questionIndex: number;
  selectedOptions: string[];
  isFinished: boolean;
  isValidated: boolean;
}

const initialState = {
  questions: gameConfig.questions,
  totalPrice: 0,
  questionIndex: 0,
  selectedOptions: [],
  isFinished: false,
  isValidated: false,
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    acceptOption(state: IGameState, action: PayloadAction<string>) {
      const { questions, questionIndex, selectedOptions, isFinished } = state;

      if (isFinished) {
        return;
      }

      const selectedOption = action.payload;

      if (selectedOptions.includes(selectedOption)) {
        return;
      }

      const currentQuestion = questions[questionIndex];
      const { correctAnswerOptions } = currentQuestion;

      if (correctAnswerOptions.length > selectedOptions.length) {
        state.selectedOptions.push(selectedOption);
      }
    },
    checkOptions(state: IGameState) {
      const { questionIndex, questions, selectedOptions, isFinished } = state;

      if (isFinished) {
        return;
      }

      const currentQuestion = questions[questionIndex];
      const { correctAnswerOptions, price } = currentQuestion;

      if (correctAnswerOptions.length !== selectedOptions.length) {
        return;
      }

      if (!includesAll<string>(correctAnswerOptions, selectedOptions)) {
        state.isFinished = true;
        return;
      }

      const nextIndex = questionIndex + 1;

      state.totalPrice += price;
      // state.isValidated = true;

      if (nextIndex > questions.length - 1) {
        state.isFinished = true;
      } else {
        state.questionIndex = nextIndex;
        state.selectedOptions = [];
        // state.isValidated = false;
      }
    },
  },
});

const { actions } = gameSlice;

export { gameSlice, actions };

export type { IGameAnswer, IGameQuestion, IGameState };
