import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { SearchResults } from "@/types/search";

export interface MovieState {
  movie: SearchResults[];
}

const initialState: MovieState = {
  movie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<SearchResults[]>) => {
      state.movie = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
