import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MobileMenu } from "components/MobileMenu/MobileMenu";

import "./Header.scss";

export const Header = () => {
  const { amount } = useSelector((state) => state.cartItems);

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Интерьер.
      </Link>
      <nav className="nav">
        <div className="nav__menu--desktop">
          <Link className="nav__link" to="/">
            Каталог
          </Link>
          <Link className="nav__link" to="/cart">
            Корзина <span className="cart-amount">{amount}</span>
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};
