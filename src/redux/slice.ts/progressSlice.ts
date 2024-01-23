import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProgressState {
  progress: number;
}

const initialState: ProgressState = {
  progress: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;
