import React from "react";
import "./index.css";

export default function RateTrayaCoach(props) {
  return (
    <div className="center mt-3">
      <h4 className="headings">{props.title}</h4>
      <form className="stars">
        <input
          type="radio"
          id={props.RateObject.fifthInput}
          name="rate"
          value="5"
          onChange={props.HandleChange}
        />
        <label htmlFor={props.RateObject.fifthInput}>
          <i className="fa-solid fa-star"></i>
          <p className="label-description">Very Satisfied</p>
        </label>

        <input
          type="radio"
          id={props.RateObject.fourthInput}
          name="rate"
          value="4"
          onChange={props.HandleChange}
        />
        <label htmlFor={props.RateObject.fourthInput}>
          <i className="fa-solid fa-star"></i>
          <p className="label-description">Satisfied</p>
        </label>

        <input
          type="radio"
          id={props.RateObject.thirdInput}
          name="rate"
          value="3"
          onChange={props.HandleChange}
        />
        <label htmlFor={props.RateObject.thirdInput}>
          <i className="fa-solid fa-star"></i>
          <p className="label-description">Average</p>
        </label>

        <input
          type="radio"
          id={props.RateObject.secondInput}
          name="rate"
          value="2"
          onChange={props.HandleChange}
        />
        <label htmlFor={props.RateObject.secondInput}>
          <i className="fa-solid fa-star"></i>
          <p className="label-description">Unsatisfied</p>
        </label>

        <input
          type="radio"
          id={props.RateObject.firstInput}
          name="rate"
          value="1"
          onChange={props.HandleChange}
        />
        <label htmlFor={props.RateObject.firstInput}>
          <i className="fa-solid fa-star"></i>
          <p className="label-description">Very Unsatisfied</p>
        </label>
      </form>
    </div>
  );
}
