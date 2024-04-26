import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  userMessages: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrenttUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserMessages: (state, action) => {
      state.userMessages = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserMessages, setCurrenttUser, setIsLoading, setError } =
  userSlice.actions;

export default userSlice.reducer;
