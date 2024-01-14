import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { TrendingResult } from "@/types/trending";

export interface TrendingDayState {
  trendingDayMovie: TrendingResult[];
}

const initialState: TrendingDayState = {
  trendingDayMovie: [],
};

const trendingDaySlice = createSlice({
  name: "trendingDayMovie",
  initialState,
  reducers: {
    setTrendingDay: (state, action: PayloadAction<TrendingResult[]>) => {
      state.trendingDayMovie = action.payload;
    },
  },
});

export const { setTrendingDay } = trendingDaySlice.actions;

export default trendingDaySlice.reducer;
