import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isUser: true, isLogin: false },
  reducers: {
    toggleLogin: (state) => {
      state.isUser = !state.isUser;
    },
    logout: (state) => {
      state.isUser = false;
      state.isLogin = false;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

/*const loginSlice = createSlice({
  name: "login",
  initialState: { isLogin: false },
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});*/

export const { toggleLogin, logout, setLogin, setLogout } = authSlice.actions;
export const selectIsUser = (state) => state.auth.isUser;
export const selectIsLogin = (state) => state.auth.isLogin;
//export const { setLogin, setLogout } = loginSlice.actions;
//export const selectIsLogin = (state) => state.login.isLogin;
export default authSlice.reducer;
