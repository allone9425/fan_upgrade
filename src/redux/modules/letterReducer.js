import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import data from "../../db.json";
//로그인 APi 연결 JSon Server
export const letterSlice = createSlice({
  name: "letter",
  initialState: {
    //리덕스 thunk
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
        letters: [...state.letters, newLetter],
      };
    },
    updateLetters: (state, action) => {
      const updatedLetters = action.payload;

      return {
        letters: updatedLetters,
      };
    },
  },
});

export const { addLetter, updateLetters } = letterSlice.actions;

export default letterSlice.reducer;
