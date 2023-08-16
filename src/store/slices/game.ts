import { createSlice } from '@reduxjs/toolkit';
import { gameConfig } from '../../config';
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
  isValidating: boolean;
  isValidated: boolean;
}

const initialState = {
  questions: gameConfig.questions,
  totalPrice: 0,
  questionIndex: 0,
  selectedOptions: [],
  isFinished: false,
  isValidating: false,
  isValidated: false,
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    totalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
    questionIndex(state: IGameState, action: PayloadAction<number>) {
      state.questionIndex = action.payload;
    },
    selectedOptions(state: IGameState, action: PayloadAction<string[]>) {
      state.selectedOptions = action.payload;
    },
    isFinished(state: IGameState, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },
    isValidating(state: IGameState, action: PayloadAction<boolean>) {
      state.isValidating = action.payload;
    },
    isValidated(state: IGameState, action: PayloadAction<boolean>) {
      state.isValidated = action.payload;
    },
  },
});

const { actions } = gameSlice;

export { gameSlice, actions };

export type { IGameAnswer, IGameQuestion, IGameState };
