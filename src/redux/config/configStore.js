import { configureStore } from "@reduxjs/toolkit";
import letterReducer from "redux/modules/letterReducer";
import selectMemberReducer from "redux/modules/selectMemberReducer";

const store = configureStore({
  reducer: {
    letter: letterReducer,
    selectMember: selectMemberReducer,
  },
});

export default store;
