import React, { useState } from "react";
import "../styles/MenuItem.css";
import MenuList from "../helpers/MenuList";

function MenuItem({ image, name, price }) {
  const [cart, setCart] = useState([]);

  const addToCart = (MenuList) => {
    setCart([...cart, MenuList]);
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button onClick={() => addToCart(MenuList)} className="menuButton">
        Add to cart
      </button>
    </div>
  );
}

export default MenuItem;
