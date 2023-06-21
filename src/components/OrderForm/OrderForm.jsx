import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactInputMask from "react-input-mask";

import { postData } from "redux/postOrderSlice";

import "./OrderForm.scss";

export const OrderForm = () => {
  const dispatch = useDispatch();
  const { total, cartItems } = useSelector((state) => state.cartItems);
  const { orderStatus, orderLoading, orderError } = useSelector(
    (state) => state.postOrderData
  );
  const formRef = useRef(null);

  const postOrderHandler = (e) => {
    e.preventDefault();
    dispatch(postData());
  };

  useEffect(() => {
    if (orderStatus === 200) {
      const form = formRef.current.elements;
      form.name.value = "";
      form.phone.value = "";
      form.address.value = "";
    }
  }, [orderStatus]);

  return (
    <aside className="cart__order order">
      <div className="order__wrap">
        <span>
          {orderLoading && "Идёт отправка..."}
          {orderError && "Что-то пошло не так!"}
          {orderStatus === 200 && "Заказ оформлен!"}
        </span>
        <h2 className="order__heading">Оформление заказа</h2>
        <form ref={formRef} onSubmit={postOrderHandler} className="order__form">
          <div className="order__input-wrap">
            <input
              name="name"
              required
              className="order__input"
              type="text"
              placeholder="Имя Фамилия"
            />
            <ReactInputMask
              name="phone"
              required
              mask="(+7) 999 999 99 99"
              placeholder="+7 904 000 80 80"
              className="order__input"
            />
            <input
              name="address"
              required
              className="order__input"
              type="text"
              placeholder="Адрес доставки"
            />
          </div>
          <p className="order__sum">Итого: {total}</p>
          <button
            disabled={orderLoading || !cartItems.length}
            className="order__btn btn btn--white"
            type="submit"
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </aside>
  );
};
