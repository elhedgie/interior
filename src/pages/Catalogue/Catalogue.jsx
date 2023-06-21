import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "redux/itemsSlice";

import { FilterSelect } from "components/FilterSelect/FilterSelect";
import { Items } from "components/Items/Items";

import "./Catalogue.scss";

export const Catalogue = () => {
  const { loading, items, error } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchItems());
    }
  }, [dispatch, items]);

  return (
    <div className="catalogue">
      <FilterSelect />
      {loading && <div className="text--warning">Идёт загрузка...</div>}
      {error && <div className="text--warning">Произошла ошибка!</div>}
      {items.length > 0 && <Items />}
    </div>
  );
};
