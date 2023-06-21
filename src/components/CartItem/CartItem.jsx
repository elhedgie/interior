import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/cartItemsSlice";
import { Counter } from "components/Counter/Counter";
import "./CartItem.scss";

export const CartItem = ({ id, src, title, description, price, quantity }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <article className="cart__item cart-item">
      <img className="cart-item__img" src={src} alt="Фото товара" />
      <div className="cart-item__wrapper">
        <h2 className="cart-item__title">{title}</h2>
        <p className="cart-item__description">{description}</p>
        <span className="cart-item__price">{price}</span>
        <div className="cart-item__btn-wrapper">
          <button className="cart-item__btn" type="button">
            Избранные
          </button>
          <button
            onClick={removeItemHandler}
            className="cart-item__btn"
            type="button"
          >
            Удалить
          </button>
        </div>
      </div>
      <Counter min={1} max={10} quantity={quantity} id={id} />
    </article>
  );
};
