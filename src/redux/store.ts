import { configureStore } from "@reduxjs/toolkit";

import trendingDayReducer from "./slice.ts/trendingDaySlice";
import trendingWeekReducer from "./slice.ts/trendingWeekSlice";
import moviesReducer from "./slice.ts/movieSlice";
import watchListReducer from "./slice.ts/watchListSlice";
import progressReducer from "./slice.ts/progressSlice";
import authReducer from "./slice.ts/authSlice";
import errorReducer from "./slice.ts/errorSlice";
import flashReducer from "./slice.ts/flashSlice";

const rootReducer = {
  trendingDay: trendingDayReducer,
  trendingWeek: trendingWeekReducer,
  movies: moviesReducer,
  watchList: watchListReducer,
  progress: progressReducer,
  auth: authReducer,
  error: errorReducer,
  flash: flashReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
