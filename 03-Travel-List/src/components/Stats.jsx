import React from "react";

const Stats = ({ count, packedCount, packedPercent }) => {
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${count} item${count > 1 ? "s" : ""} on your list, and you already packed ${packedCount} (${packedPercent}%)`}
      </em>
    </footer>
  );
};

export default Stats;
