import { createSlice } from "@reduxjs/toolkit";

const ifThere = () => {
  const userId = localStorage.getItem("nowLogin");

  return userId !== null;
};

const userBox = localStorage.getItem("nowLogin");
const userId = localStorage.getItem("userId");

const authSlice = createSlice({
  name: "auth",

  initialState: {
    isUser: true,
    isLogin: ifThere(),
    userData: userBox,
    userId: userId,
    avatar:
      "https://raw.githubusercontent.com/allone9425/nbc_fan/56b984e3565f06b12070cc5c468f5a2d97a9b1a5/src/assets/default.svg",
  },
  reducers: {
    toggleLogin: (state) => {
      state.isUser = !state.isUser;
    },
    logout: (state) => {
      state.isUser = true;
      state.isLogin = false;
      state.userId = null;
      localStorage.clear();
    },
    setLogin: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
      state.avatar = action.payload.avatar;
      state.userId = action.payload.userId; // userId 추가

      localStorage.setItem("userId", action.payload.userId); // localStorage에 userId 저장
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.userId = null;
      state.userData = {};
    },
  },
});

export const { toggleLogin, logout, setLogin, setLogout } = authSlice.actions;
export const selectIsUser = (state) => state.auth.isUser;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUserData = (state) => state.auth.userData;
export const selectUserId = (state) => state.auth.userId;
export default authSlice.reducer;
