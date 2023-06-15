const mongoose = require("mongoose");

const Review = mongoose.Schema({
  hairCoachRating: {
    type: Number,
    required: true,
  },
  happyRating: {
    type: Number,
    required: true,
  },
  isResolveDoubt: {
    type: Boolean,
    default: false,
  },
  wantToChangeCoach: {
    type: Boolean,
    default: false,
  },
  Language: {
    type: String,
    default: "English",
  },
  TelluUsReview: {
    type: String,
  },
});

module.exports = mongoose.model("review", Review);
