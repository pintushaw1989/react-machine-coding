import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./Rating.css";

const Rating = ({ numberOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleOnMouseEnter = (index) => {
    setHover(index);
  };

  const handleOnMouseLeave = () => {
    setHover(rating);
  };

  // console.log(hover);

  return (
    <div className="start-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseLeave={handleOnMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Rating;
