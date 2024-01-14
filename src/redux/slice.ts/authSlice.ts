import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "@/redux/store";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;

onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChanged:", user);
  if (user) {
    if (user.emailVerified) {
      store.dispatch(setAuthenticated(true));
    } else {
      store.dispatch(setAuthenticated(false));
      auth.signOut();
    }
  } else {
    store.dispatch(setAuthenticated(false));
  }
});
