import React from "react";

import illustration from "./images/illustration-thank-you.svg";

const ThankYouComponent = ({ rating }) => {
  return (
    <div className="ty-container">
      <img src={illustration} alt="thank you" className="illustration" />
      <p className="you-rated">You selected {rating} out of 5</p>
      <div className="text">
        <h1 className="title">Thank you!</h1>
        <p className="subtext">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouComponent;
