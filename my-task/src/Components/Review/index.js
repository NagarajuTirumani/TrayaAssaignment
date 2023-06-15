import React from "react";
import RatesContainer from "../RatesContainer/index";
import TellUsContainer from "../TellUsContainer/index";

function Review() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between w-100">
      <RatesContainer />
      <TellUsContainer />
    </div>
  );
}

export default Review;
