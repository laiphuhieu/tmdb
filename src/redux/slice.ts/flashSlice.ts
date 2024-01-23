import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface flashState {
  flash: string | null;
}

const initialState: flashState = {
  flash: null,
};

const flashSlice = createSlice({
  name: "flash",
  initialState,
  reducers: {
    setFlash: (state, action: PayloadAction<string | null>) => {
      state.flash = action.payload;
    },
  },
});

export const { setFlash } = flashSlice.actions;
export default flashSlice.reducer;
