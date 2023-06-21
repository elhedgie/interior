import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "redux/cartItemsSlice";

import { ReactComponent as AddToCardSvg } from "assets/svg/addToCart.svg";
import { ReactComponent as LikeSvg } from "assets/svg/like.svg";

import "./Item.scss";

export const Item = ({ id, src, title, description, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {
      id,
      src,
      title,
      description,
      price,
    };
    dispatch(addToCart(item));
  };
  return (
    <Link to="#">
      <article className="items__item item">
        <img className="item__img" src={src} alt="Фото товара" />
        <h2 className="item__heading">{title}</h2>
        <p className="item__description">{description}</p>
        <span className="item__price">{price}</span>
        <div className="item__btn-wrapper">
          <button
            className="item__btn btn--add-cart"
            onClick={addToCartHandler}
            type="button"
            aria-label="Добавить товар в корзину"
          >
            <AddToCardSvg />
          </button>
          <button
            className="item__btn btn--add-fav"
            type="button"
            aria-label="Добавить товар в избранное"
          >
            <LikeSvg />
          </button>
        </div>
      </article>
    </Link>
  );
};
