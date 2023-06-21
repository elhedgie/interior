import { fromStrToNum } from "./helper";

export const filterItemsHelper = (opt, items) => {
  switch (opt) {
    case "cheap":
      return items.sort((a, b) =>
        fromStrToNum(a.price) > fromStrToNum(b.price) ? 1 : -1
      );
    case "expensive":
      return items.sort((a, b) =>
        fromStrToNum(a.price) < fromStrToNum(b.price) ? 1 : -1
      );
    default:
      return items.sort((a, b) => (a.date > b.date ? 1 : -1));
  }
};
