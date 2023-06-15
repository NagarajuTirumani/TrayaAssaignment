import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header/index";
import Review from "./Components/Review/index";
import SuccessComponent from "./Components/SuccessComponent/index";

function App() {
  const isReviewSubmitted = useSelector(
    (state) => state.review.isReviewSubmitted
  );
  return (
    <div className="App">
      <Header />
      {isReviewSubmitted ? <SuccessComponent /> : <Review />}
    </div>
  );
}

export default App;
