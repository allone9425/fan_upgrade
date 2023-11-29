import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isUser: true },
  reducers: {
    toggleLogin: (state) => {
      state.isUser = !state.isUser;
    },
    logout: (state) => {
      state.isUser = false;
    },
  },
});

export const { toggleLogin } = authSlice.actions;
export const selectIsUser = (state) => state.auth.isUser;
export default authSlice.reducer;
