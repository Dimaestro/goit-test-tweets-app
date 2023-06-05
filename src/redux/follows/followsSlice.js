import { createSlice } from "@reduxjs/toolkit";

const followsSlice = createSlice({
  name: 'follows',
  initialState: {
    following: [],
  },
  reducers: {
    addFollowing(state, action) {
      state.following.push(action.payload)
    },
    removeFollowing(state, action) {
      const index = state.following.findIndex(item => item.id === action.payload)
      state.following.splice(index, 1);
    }
  }
})

export const { addFollowing, removeFollowing } = followsSlice.actions;
export default followsSlice;