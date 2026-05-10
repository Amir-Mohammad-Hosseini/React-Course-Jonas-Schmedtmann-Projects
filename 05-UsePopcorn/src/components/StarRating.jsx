import { useState } from "react";
import Star from "./Star";

const containerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starsContainerStyle = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 16,
  defaultRating = null,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(defaultRating);

  const handleRateMovie = (number) => {
    setRating(number);
  };
  const handleHoverRateMovie = (number) => {
    setTempRating(number);
  };
  const handleUnhoverRateMovie = () => {
    setTempRating(null);
  };

  const textStyle = {
    lineHeight: "0",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyles}>
      <div style={starsContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            isFull={tempRating ? tempRating > i : rating > i}
            index={i}
            onRate={handleRateMovie}
            onHoverRate={handleHoverRateMovie}
            onUnhoverRate={handleUnhoverRateMovie}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating}</p>
    </div>
  );
};

export default StarRating;
