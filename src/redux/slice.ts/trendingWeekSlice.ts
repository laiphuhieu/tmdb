import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { TrendingResult } from "@/types/trending";

export interface TrendingWeekState {
  trendingWeekMovie: TrendingResult[];
}

const initialState: TrendingWeekState = {
  trendingWeekMovie: [],
};

const trendingWeekSlice = createSlice({
  name: "trendingWeekMovie",
  initialState,
  reducers: {
    setTrendingWeek: (state, action: PayloadAction<TrendingResult[]>) => {
      state.trendingWeekMovie = action.payload;
    },
  },
});

export const { setTrendingWeek } = trendingWeekSlice.actions;

export default trendingWeekSlice.reducer;
