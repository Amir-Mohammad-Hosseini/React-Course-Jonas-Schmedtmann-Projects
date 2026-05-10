import { FaRegStar, FaStar } from "react-icons/fa";

const Star = ({
  index,
  isFull,
  onRate,
  onHoverRate,
  onUnhoverRate,
  color,
  size,
}) => {
  const starStyles = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={starStyles}
      color={color}
      onClick={() => onRate(index + 1)}
      onMouseEnter={() => onHoverRate(index + 1)}
      onMouseLeave={onUnhoverRate}
    >
      {isFull ? (
        <FaStar color={color} style={{ width: "100%", height: "100%" }} />
      ) : (
        <FaRegStar color={color} style={{ width: "100%", height: "100%" }} />
      )}
    </span>
  );
};

export default Star;
