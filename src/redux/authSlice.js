import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucess: (state, action) => {
      (state.user = action.payload), (state.isAuthenticated = true);
    },
    refreshAccessToken: (state, action) => {
      if (state.user) {
        state.user.access = action.payload; // update only access token
      }
    },
    logout: (state) => {
      (state.user = null), (state.isAuthenticated = false);
    },
  },
});

export const { loginSucess, logout, refreshAccessToken } = authSlice.actions;
export default authSlice.reducer;
