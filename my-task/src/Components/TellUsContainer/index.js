import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTellUsReview,
  changeReviewSumissionStatus,
} from "../../Redux/slice";
import "./index.css";

export default function TellUsContainer() {
  const dispatch = useDispatch();
  const HairCoachRating = useSelector((state) => state.review.hairCoachRating);
  const isResolveDoubt = useSelector((state) => state.review.isResolveDoubt);
  const wantToChangeCoach = useSelector(
    (state) => state.review.wantToChangeCoach
  );
  const Language = useSelector((state) => state.review.Language);
  const TelluUsReview = useSelector((state) => state.review.TelluUsReview);
  const HappyRating = useSelector((state) => state.review.happyRating);

  const HandleSubmission = async () => {
    const ReviewObject = {
      hairCoachRating: parseInt(HairCoachRating),
      happyRating: parseInt(HappyRating),
      isResolveDoubt,
      wantToChangeCoach,
      Language,
      TelluUsReview,
    };

    if (HairCoachRating != 0 && HappyRating != 0) {
      try {
        let resp = await fetch("http://localhost:4000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ReviewObject),
        });
        console.log("response", resp);
        dispatch(changeReviewSumissionStatus());
      } catch (err) {
        console.log("err is", err);
      }
    }
  };

  const HandleFinalReview = (e) => {
    dispatch(changeTellUsReview(e.target.value));
  };

  return (
    <div className="tellus-container">
      <h4 className="mt-3 mb-4 my-xl-5 headings">
        Tell us more, how can we serve better?
      </h4>
      <textarea
        rows="5"
        cols="50"
        className="final-review"
        onChange={HandleFinalReview}
      ></textarea>
      <br />
      <button className="submit-button" onClick={HandleSubmission}>
        SUBMIT YOUR FEEDBACK
      </button>
    </div>
  );
}
