import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TrendingResult } from "@/types/trending";

interface WatchListState {
  watchList: TrendingResult[];
  highlightedMovies: number[];
}

const initialState: WatchListState = {
  watchList: [],
  highlightedMovies: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<TrendingResult>) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchList: (state, action: PayloadAction<number>) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      );
      state.highlightedMovies = state.highlightedMovies.filter(
        (id) => id !== action.payload
      );
    },
    setWatchList: (state, action: PayloadAction<TrendingResult[]>) => {
      state.watchList = action.payload;
    },
    highlightedMovies: (state, action: PayloadAction<number>) => {
      state.highlightedMovies = [...state.highlightedMovies, action.payload];
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  setWatchList,
  highlightedMovies,
} = watchListSlice.actions;

export default watchListSlice.reducer;
