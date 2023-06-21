import React from "react";
import { useSelector } from "react-redux";

import { Item } from "components/Item/Item";

import "./Items.scss";

export const Items = () => {
  const { items } = useSelector((state) => state.items);
  return (
    <section className="items">
      {items.map((elem) => (
        <Item
          id={elem.id}
          key={elem.title}
          src={elem.src}
          title={elem.title}
          description={elem.description}
          price={elem.price}
        />
      ))}
    </section>
  );
};
