import React from "react";

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <div className={`${soldOut ? "sold-out" : ""} pizza`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Pizza;
