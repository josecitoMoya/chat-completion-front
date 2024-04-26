import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: {},
  messages: null,
  isLoading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessage, setMessages } = messageSlice.actions;

export default messageSlice.reducer;
