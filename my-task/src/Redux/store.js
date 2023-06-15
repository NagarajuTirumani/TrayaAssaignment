import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./slice.js";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});
