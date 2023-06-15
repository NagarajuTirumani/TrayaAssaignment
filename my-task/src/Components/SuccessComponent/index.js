import React from "react";
import "./index.css";

function SuccessComponent() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center success-component">
      <i className="fa-solid fa-star"></i>
      <h2 className="mt-3">We will do better!</h2>
      <p>Thanks for letting us know</p>
    </div>
  );
}

export default SuccessComponent;
