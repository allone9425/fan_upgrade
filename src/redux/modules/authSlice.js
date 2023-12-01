import { createSlice } from "@reduxjs/toolkit";

const ifThere = () => {
  const userId = localStorage.getItem("nowLogin");
  console.log(userId);
  return userId !== null;
};
//시작 getUserItem userData  새로고침 해서 남아있게하기위해서

const authSlice = createSlice({
  name: "auth",
  //isLogin을 false가 아닌 localStrage 기준으로 user정보 혹은 토큰이 있으면 true, false
  initialState: { isUser: true, isLogin: ifThere(), userData: {} },
  reducers: {
    toggleLogin: (state) => {
      state.isUser = !state.isUser;
    },
    logout: (state) => {
      state.isUser = true;
      state.isLogin = false;
      localStorage.clear();
    },
    setLogin: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
      console.log(action.payload);
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.userData = {};
    },
  },
});

export const { toggleLogin, logout, setLogin, setLogout } = authSlice.actions;
export const selectIsUser = (state) => state.auth.isUser;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUserData = (state) => state.auth.userData;
export default authSlice.reducer;
