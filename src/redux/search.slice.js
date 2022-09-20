import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import showServices from "services/show.sevices";
import { errorHandler } from "utils/errorHandler";

const initialState = {
  shows: [],
  error: null,
  status: "idle",
};

export const fetchShows = createAsyncThunk("shows/fetchShows", async (queryText, thunkAPI) => {
  try {
    const response = await showServices.getShow(queryText);
    return response;
  } catch (error) {
    return errorHandler(error, thunkAPI);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => {
      state.shows = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.shows = action.payload;
        state.status = "success";
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});
export const { reset } = searchSlice.actions;

export default searchSlice.reducer;
