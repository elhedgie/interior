import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "redux/cartItemsSlice";

import { ReactComponent as ArrowBtn } from "assets/svg/counterArrow.svg";

import "./Counter.scss";

export const Counter = ({ id, quantity, min, max }) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    if (quantity < max) {
      dispatch(incrementQuantity(id));
    }
  };

  const decrementHandler = () => {
    if (quantity >= min) {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <div className="cart__quantity">
      <span className="cart__num">{quantity}</span>
      <button
        onClick={incrementHandler}
        className="cart__counter-btn cart__counter-btn--inc"
        type="button"
        aria-label="Увеличить количество товаров"
      >
        <ArrowBtn />
      </button>
      <button
        onClick={decrementHandler}
        className="cart__counter-btn cart__counter-btn--dec"
        type="button"
        aria-label="Уменьшить количество товаров"
      >
        <ArrowBtn />
      </button>
    </div>
  );
};
