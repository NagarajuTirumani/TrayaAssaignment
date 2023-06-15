const { env } = require("custom-env");
const express = require("express");
const mongoose = require("mongoose");
const Review = require("./model.js");
const cors = require("cors");

env();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected....");
  })
  .catch((err) => {
    console.log("connecting err is ", err);
  });

app.post("/", async (request, response) => {
  const {
    hairCoachRating,
    happyRating,
    isResolveDoubt,
    wantToChangeCoach,
    Language,
    TelluUsReview,
  } = request.body;
  try {
    const reviewData = new Review({
      hairCoachRating,
      happyRating,
      isResolveDoubt,
      wantToChangeCoach,
      Language,
      TelluUsReview,
    });
    await reviewData.save();
    return response.json(await Review.find());
  } catch (err) {
    console.log("response err is", err);
  }
});

app.get("/", async (req, res) => {
  res.send(await Review.find());
});

app.listen(4000, () => {
  console.log(`server is listening....`);
});
