import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isResolveDoubt: false,
  wantToChangeCoach: false,
  hairCoachRating: 0,
  isHairCoachRated: false,
  happyRating: 0,
  Language: "",
  TelluUsReview: "",
  isReviewSubmitted: false,
};

export const reviewSlice = createSlice({
  name: "Review",
  initialState,
  reducers: {
    ResolveDoubtToTrue: (state) => {
      state.isResolveDoubt = true;
    },
    ResolveDoubtToFalse: (state) => {
      state.isResolveDoubt = false;
    },
    ChangeCoachToTrue: (state) => {
      state.wantToChangeCoach = true;
    },
    ChangeCoachToFalse: (state) => {
      state.wantToChangeCoach = false;
    },
    changeHairCoachRating: (state, action) => {
      state.hairCoachRating = action.payload;
    },
    changeIsHairCoachRated: (state) => {
      state.isHairCoachRated = true;
    },
    changeHappyRating: (state, action) => {
      state.happyRating = action.payload;
    },
    changeLanguage: (state, action) => {
      state.Language = action.payload;
    },
    changeTellUsReview: (state, action) => {
      state.TelluUsReview = action.payload;
    },
    changeReviewSumissionStatus: (state) => {
      state.isReviewSubmitted = true;
    },
  },
});

export const {
  ResolveDoubtToTrue,
  ResolveDoubtToFalse,
  ChangeCoachToTrue,
  ChangeCoachToFalse,
  changeHairCoachRating,
  changeIsHairCoachRated,
  changeHappyRating,
  changeLanguage,
  changeTellUsReview,
  changeReviewSumissionStatus,
} = reviewSlice.actions;

export default reviewSlice.reducer;
