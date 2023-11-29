import { combineReducers, createStore } from "redux";
import letterReducer from "redux/reducers/letterReducer";
import selectMemberReducer from "redux/reducers/selectMemberReducer";

const rootReducer = combineReducers({
  letter: letterReducer,
  selectMember: selectMemberReducer,
});

const store = createStore(rootReducer);
export default store;
/*
중앙 데이터 관리소를 설정하는 방법
import { configureStore } from "@reduxjs/toolkit";
import letterReducer from "redux/reducers/letterReducer";
import selectMemberReducer from "redux/reducers/selectMemberReducer";

const store = configureStore({
  reducer: {
    letter: letterReducer,
    selectMember: selectMemberReducer,
  },
});

export default store;
*/
