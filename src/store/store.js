import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import messageReducer from "./slices/messages.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;
