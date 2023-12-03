import { configureStore } from "@reduxjs/toolkit";
import authSlice from "redux/modules/authSlice";
import letterReducer from "redux/modules/letterReducer";
import selectMemberReducer from "redux/modules/selectMemberReducer";

const store = configureStore({
  reducer: {
    letter: letterReducer,
    selectMember: selectMemberReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
