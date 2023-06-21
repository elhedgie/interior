import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "redux/cartItemsSlice";
import { useNavigate } from "react-router";

import { CartItem } from "components/CartItem/CartItem";
import { OrderForm } from "components/OrderForm/OrderForm";

import "./Cart.scss";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, loading, error } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const cleanCartHandler = () => {
    dispatch(cleanCart());
  };

  return (
    <div className="cart">
      {loading && <span className="text--warning">Идёт загрузка...</span>}
      {error && <span className="text--warning">Произошла ошибка!</span>}
      {!error && !loading && !cartItems.length && (
        <span className="text--warning">Корзина пуста.</span>
      )}
      {cartItems.length > 0 && (
        <section className="cart__items">
          <div className="cart__header">
            <span>Товар</span>
            <span>К-во</span>
          </div>
          <div className="cart__wrap">
            {cartItems.map((elem) => (
              <CartItem
                id={elem.id}
                quantity={elem.quantity}
                key={elem.title}
                src={elem.src}
                title={elem.title}
                description={elem.description}
                price={elem.price}
              />
            ))}
          </div>
          {cartItems.length > 0 && (
            <div className="cart__btn-wrapper">
              <button
                onClick={cleanCartHandler}
                className="btn cart__btn btn--white"
                type="button"
              >
                Очистить корзину
              </button>
              <button
                onClick={() => navigate("/")}
                className="btn cart__btn btn--black"
                type="button"
              >
                Продолжить покупки
              </button>
            </div>
          )}
        </section>
      )}
      <OrderForm />
    </div>
  );
};
