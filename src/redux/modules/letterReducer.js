import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//로그인 APi 연결 JSon Server CREATE slice
// export const fetchLetters = async (dispatch) => {
//   console.log(1);
//   try {
//     // Axios를 사용하여 데이터를 가져오기  "http://localhost:4000/letters?_sort=createdAt&_order=asc"
//     const response = await axios.get("http://localhost:4000/letters");
//     const data = response.data;
//     console.log(data);
//     // 가져온 데이터를 액션으로 디스패치
//     dispatch(updateLetters(data));
//   } catch (error) {
//     console.error("에러", error);
//   }
// };

const initialState = {
  letters: [],
  isLoding: false,
  isError: false,
  error: null,
  // letters: data.map((aData) => ({
  //   ...aData,
  //   id: uuid(),
  // })),
};

export const __getLetters = createAsyncThunk(
  "letters/get",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/letters");
      console.log("response", response);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.error("에러", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    // addLetter: (state, action) => {
    //   const newLetter = action.payload;
    //   newLetter.id = uuid();
    //   return {
    //     letters: [...state.letters, newLetter],
    //   };
    // },
    // updateLetters: (state, action) => {
    //   const updatedLetters = action.payload;
    //   return {
    //     letters: updatedLetters,
    //   };
    // },
  },

  extraReducers: {
    [__getLetters.pending]: (state) => {
      state.isLoding = true;
      state.isError = false;
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.isError = false;
      state.letters = action.payload;
      console.log("fullfilled", action);
    },
    [__getLetters.rejected]: (state, action) => {
      state.isLoding = false;
      state.isError = true;
      state.error = action.payload;
      state.letters = [];
    },
  },
});

export const { addLetter, updateLetters } = letterSlice.actions;

export default letterSlice.reducer;
