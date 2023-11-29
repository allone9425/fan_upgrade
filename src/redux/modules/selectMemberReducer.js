import { createSlice } from "@reduxjs/toolkit";

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
