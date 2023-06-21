import items from "data/items";
import cartItems from "data/cartItems";

export const api = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.includes("/items")) {
          resolve(items);
        } else if (url.includes("/cartItems")) {
          resolve(cartItems);
        } else {
          reject(new Error("Некорректный адрес!"));
        }
      }, 2000);
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.includes("/post/data")) {
          resolve({
            ok: true,
            status: 200,
          });
        } else {
          reject(new Error("Некорретный адрес!"));
        }
      }, 2000);
    });
  },
};
