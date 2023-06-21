import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as MenuSvg } from "assets/svg/main.svg";
import { ReactComponent as CartSvg } from "assets/svg/cart.svg";

import "./MobileMenu.scss";

export const MobileMenu = () => {
  const { amount } = useSelector((state) => state.cartItems);
  return (
    <div className="nav__menu--mobile">
      <Link className="nav__mobile-link" to="/">
        <MenuSvg />
      </Link>
      <Link className="nav__mobile-link" to="/cart">
        <CartSvg />
        <span className="cart-amount--mobile">{amount}</span>
      </Link>
    </div>
  );
};
