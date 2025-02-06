import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // No user is logged in initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Saving user to Redux:", action.payload); // ✅ Debugging Redux state
      state.user = action.payload; // ✅ Store user after login
    },
    logout: (state) => {
      console.log("Logging out, clearing Redux user state"); // ✅ Debugging
      state.user = null; // ✅ Clear user state on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

  
