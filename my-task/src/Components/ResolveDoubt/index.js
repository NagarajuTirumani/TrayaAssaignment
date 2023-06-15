import React from "react";
import "./index.css";

function ResolveDoubt(props) {
  return (
    <div className="d-flex flex-column">
      <h4 className="pt-5 headings">{props.title}</h4>
      <div className="d-flex justify-content-lg-center buttons-container mt-3">
        <button
          className={props.changePosition === false ? "button-1" : ""}
          onClick={props.changeToFalse}
        >
          No
        </button>
        <button
          className={props.changePosition === true ? "button-1" : ""}
          onClick={props.ChangeToTrue}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default ResolveDoubt;
