import { createSlice } from "@reduxjs/toolkit";

const ifThere = () => {
  const userId = localStorage.getItem("nowLogin");
  console.log(userId);
  return userId !== null;
};

const authSlice = createSlice({
  name: "auth",
  //isLogin을 false가 아닌 localStrage 기준으로 user정보 혹은 토큰이 있으면 true, false
  initialState: { isUser: true, isLogin: ifThere() },
  reducers: {
    toggleLogin: (state) => {
      state.isUser = !state.isUser;
    },
    logout: (state) => {
      state.isUser = false;
      state.isLogin = false;
      localStorage.clear();
      //TODO: 레이아웃 하고 로그아웃 누르면 디스패치(로그아웃())
      //로컬 스토리지 비우기 clear
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { toggleLogin, logout, setLogin, setLogout } = authSlice.actions;
export const selectIsUser = (state) => state.auth.isUser;
export const selectIsLogin = (state) => state.auth.isLogin;

export default authSlice.reducer;
