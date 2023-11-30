import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import uuid from "react-uuid";
//로그인 APi 연결 JSon Server CREATE slice
export const fetchLetters = async (dispatch) => {
  console.log(1);
  try {
    // Axios를 사용하여 데이터를 가져오기
    const response = await axios.get("http://localhost:4000/letters");
    const data = response.data;
    console.log(data);
    // 가져온 데이터를 액션으로 디스패치
    dispatch(updateLetters(data));
  } catch (error) {
    console.error("에러", error);
  }
};
export const letterSlice = createSlice({
  name: "letter",
  initialState: {
    letters: [],
    // letters: data.map((aData) => ({
    //   ...aData,
    //   id: uuid(),
    // })),
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

// export const fetchLetters = () => {
//   return (dispatch) => {
//     dispatch(fetchLettersAsync());
//   };
// };

export default letterSlice.reducer;
