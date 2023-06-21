import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItems } from "redux/itemsSlice";

import "./FilterSelect.scss";

export const FilterSelect = () => {
  const { filterValue } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const filterHandler = (e) => {
    if (e.target.value) dispatch(filterItems(e.target.value));
  };
  return (
    <div className="select">
      <select value={filterValue} onChange={filterHandler}>
        <option value="new">Порядок: сперва новые</option>
        <option value="cheap">Порядок: сперва дешевле</option>
        <option value="expensive">Порядок: сперва дороже</option>
      </select>
      <span className="focus"></span>
    </div>
  );
};
