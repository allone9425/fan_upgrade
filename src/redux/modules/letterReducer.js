import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [],
  isLoding: false,
  isError: false,
  error: null,
};

export const __getLetters = createAsyncThunk(
  "letters/get",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/letters");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addLetter = createAsyncThunk(
  "letters/add",
  async (newLetters, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/letters",
        newLetters
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {},
  extraReducers: {
    [__getLetters.pending]: (state) => {
      state.isLoding = true;
      state.isError = false;
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.isError = false;
      state.letters = action.payload;
    },
    [__getLetters.rejected]: (state, action) => {
      state.isLoding = false;
      state.isError = true;
      state.error = action.payload;
      state.letters = [];
    },
    [addLetter.fulfilled]: (state, action) => {
      state.letters.push(action.payload);
    },
  },
});

export default letterSlice.reducer;
