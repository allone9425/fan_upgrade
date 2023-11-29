import data from "../../shared/data.json";
import uuid from "react-uuid";

// 액션 타입 정의
const ADD_LETTER = "letter/ADD_LETTER";
const UPDATE_LETTERS = "letter/UPDATE_LETTERS";

// 액션 생성자 함수
export const addLetter = (newLetter) => ({
  type: ADD_LETTER,
  payload: {
    ...newLetter,
    id: uuid(),
  },
});

export const updateLetters = (updatedLetters) => ({
  type: UPDATE_LETTERS,
  payload: updatedLetters,
});

// 초기 상태
const initialState = {
  letters: data.map((aData) => ({
    ...aData,
    id: uuid(),
  })),
};

// 리듀서
const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        letters: [...state.letters, action.payload],
      };
    case UPDATE_LETTERS:
      return {
        letters: action.payload,
      };
    default:
      return state;
  }
};

export default letterReducer;

/*import { createSlice } from "@reduxjs/toolkit";
import data from "../../shared/data.json";
import uuid from "react-uuid";

export const letterSlice = createSlice({
  name: "letter",
  initialState: {
    letters: data.map((aData) => ({
      ...aData,
      id: uuid(),
    })),
  },
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      newLetter.id = uuid();

      return {
        ...state,
        letters: [...state.letters, newLetter],
      };
    },
    updateLetters: (state, action) => {
      const updatedLetters = action.payload;

      return {
        ...state,
        letters: updatedLetters,
      };
    },
  },
});

export const { addLetter, updateLetters } = letterSlice.actions;

export default letterSlice.reducer; */
