import React from "react";
import Pizza from "./Pizza";
import PIZZA_DATA from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div className="pizzas">
        {PIZZA_DATA.length ? (
          PIZZA_DATA.map((pizza) => <Pizza {...pizza} key={pizza.name} />)
        ) : (
          <p>We're still working on our menu . Please come back later :)</p>
        )}
      </div>
    </main>
  );
};

export default Menu;
