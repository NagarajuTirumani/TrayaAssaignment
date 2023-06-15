import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../Redux/slice";
import "./index.css";

function LanguageComponent() {
  const dispatch = useDispatch();
  const HandleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="mt-4">
      <h4 className="headings pe-1">
        Choose your preferred Language, We will let your coach know about your
        choice.
      </h4>
      <form className="d-flex flex-column language-design">
        <div className="w-75 py-3 input-container">
          <input
            type="radio"
            name="language"
            id="English"
            value="English"
            className="me-2"
            onChange={HandleLanguage}
          />
          <label
            className="fs-5"
            htmlFor="English"
            style={{ color: "#404040" }}
          >
            English
          </label>
        </div>
        <div className="w-75 pb-3 pt-2 input-container">
          <input
            type="radio"
            name="language"
            id="Hindi"
            value="Hindi"
            className="me-2"
            onChange={HandleLanguage}
          />
          <label className="fs-5" htmlFor="Hindi" style={{ color: "#404040" }}>
            Hindi
          </label>
        </div>
        <div className="w-75 pb-3 pt-2 input-container">
          <input
            type="radio"
            name="language"
            id="Telugu"
            value="Telugu"
            className="me-2"
            onChange={HandleLanguage}
          />
          <label className="fs-5" htmlFor="Telugu" style={{ color: "#404040" }}>
            Telugu
          </label>
          <br />
        </div>
        <div className="w-75 pb-3 pt-2 input-container">
          <input
            type="radio"
            name="language"
            id="Tamil"
            value="Tamil"
            className="me-2"
            onChange={HandleLanguage}
          />
          <label className="fs-5" htmlFor="Tamil" style={{ color: "#404040" }}>
            Tamil
          </label>
          <br />
        </div>
        <div className="w-75 pb-4 pt-2">
          <input
            type="radio"
            name="language"
            id="Kannada"
            value="Kannada"
            className="me-2"
            onChange={HandleLanguage}
          />
          <label
            className="fs-5"
            htmlFor="Kannada"
            style={{ color: "#404040" }}
          >
            Kannada
          </label>
          <br />
        </div>
      </form>
    </div>
  );
}

export default LanguageComponent;
