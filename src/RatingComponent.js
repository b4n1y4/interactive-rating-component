import { React, useState } from "react";

import ThankYouComponent from "./ThankYouComponent";

import starIcon from "./images/icon-star.svg";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [showThanks, setShowThanks] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("rating-value")) {
      setRating(e.target.innerText);
    } else if (!e.target.classList.contains("submit-btn")) {
      setRating(0);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThanks(true);
  };

  return (
    <div className="card">
      {showThanks ? (
        <ThankYouComponent rating={rating} />
      ) : (
        <div className="rating-component" onClick={handleClick}>
          <img src={starIcon} alt="star" className="icon circle-bg" />
          <h1 className="title">How did we do?</h1>
          <p className="subtext">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating-values-container">
            {[1, 2, 3, 4, 5].map((r) => {
              return (
                <button
                  className="rating-value circle-bg"
                  key={r}
                  onClick={handleClick}
                >
                  {r}
                </button>
              );
            })}
          </div>
          <button
            type="submit"
            className="submit-btn"
            onClick={handleSubmit}
            disabled={rating == 0 ? true : false}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
