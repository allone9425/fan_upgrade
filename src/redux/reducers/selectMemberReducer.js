// 액션 타입 정의
const UPDATE_SELECTED_MEMBER = "selectMember/UPDATE_SELECTED_MEMBER";

// 액션 생성자
export const updateSelectedMember = (selectedMember) => ({
  type: UPDATE_SELECTED_MEMBER,
  payload: selectedMember,
});

// 초기 상태
const initialState = {
  selectedMember: "전체보기",
};

// 리듀서
const selectMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_MEMBER:
      return {
        selectedMember: action.payload,
      };
    default:
      return state;
    // {
    //    selectedMember: "전체보기",
    // };
  }
};

export default selectMemberReducer;

/*import { createSlice } from "@reduxjs/toolkit";

export const selectMemberSlice = createSlice({
  name: "selectMember",
  initialState: {
    selectedMember: "전체보기",
  },
  reducers: {
    updateSelectedMember: (state, action) => {
      state.selectedMember = action.payload;
    },
  },
});

export const { updateSelectedMember } = selectMemberSlice.actions;

export default selectMemberSlice.reducer;
*/
