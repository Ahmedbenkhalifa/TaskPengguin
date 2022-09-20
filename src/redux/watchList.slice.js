import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    add: (state, action) => {
      if (!state.watchList.includes(action.payload))
        state.watchList = [...state.watchList, action.payload];
    },
    remove: (state, action) => {
      state.watchList = state.watchList.filter((showId) => showId !== action.payload);
    },
  },
});

export const { add, remove } = watchListSlice.actions;

export default watchListSlice.reducer;
