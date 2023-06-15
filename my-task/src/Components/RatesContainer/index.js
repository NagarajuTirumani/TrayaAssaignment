import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResolveDoubt from "../ResolveDoubt/index";
import RateTrayaCoach from "../RateTrayaCoach/index";
import LanguageComponent from "../LanguageContainer/index";
import {
  changeHairCoachRating,
  changeIsHairCoachRated,
  changeHappyRating,
  ResolveDoubtToTrue,
  ResolveDoubtToFalse,
  ChangeCoachToTrue,
  ChangeCoachToFalse,
} from "../../Redux/slice";
import "./index.css";

export default function RatesContainer() {
  const isHairCoachRated = useSelector(
    (state) => state.review.isHairCoachRated
  );
  const isResolved = useSelector((state) => state.review.isResolveDoubt);
  const HairCoachChange = useSelector(
    (state) => state.review.wantToChangeCoach
  );
  const hairCoachRating = useSelector((state) => state.review.hairCoachRating);
  const dispatch = useDispatch();

  const HairObject = {
    firstInput: "one",
    secondInput: "two",
    thirdInput: "three",
    fourthInput: "four",
    fifthInput: "five",
  };

  const HappyObject = {
    firstInput: "six",
    secondInput: "seven",
    thirdInput: "eight",
    fourthInput: "nine",
    fifthInput: "ten",
  };

  const handleRatingChange = (e) => {
    dispatch(changeHairCoachRating(e.target.value));
    dispatch(changeIsHairCoachRated());
  };

  const handleHappyRating = (e) => {
    dispatch(changeHappyRating(e.target.value));
  };

  const IsResolvedDoubtToTrue = () => {
    dispatch(ResolveDoubtToTrue());
  };

  const IsResolvedDoubtToFalse = () => {
    dispatch(ResolveDoubtToFalse());
  };

  const HandleChangeCoachToTrue = () => {
    dispatch(ChangeCoachToTrue());
  };

  const HandleChangeCoachToFalse = () => {
    dispatch(ChangeCoachToFalse());
  };

  return (
    <div className="border-design">
      <ResolveDoubt
        title="Did your hair coach resolve your doubts?"
        ChangeToTrue={IsResolvedDoubtToTrue}
        changeToFalse={IsResolvedDoubtToFalse}
        changePosition={isResolved}
      />
      {hairCoachRating != 1 ? (
        <RateTrayaCoach
          title="Rate your Traya hair coach"
          RateObject={HairObject}
          HandleChange={handleRatingChange}
        />
      ) : (
        <ResolveDoubt
          title="Do you want to change your coach?"
          ChangeToTrue={HandleChangeCoachToTrue}
          changeToFalse={HandleChangeCoachToFalse}
          changePosition={HairCoachChange}
        />
      )}
      {isHairCoachRated && (
        <RateTrayaCoach
          RateObject={HappyObject}
          title="Are you happy with Traya?"
          HandleChange={handleHappyRating}
        />
      )}
      {isHairCoachRated && <LanguageComponent />}
    </div>
  );
}
