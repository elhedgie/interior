import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import { cartItemsReducer } from "./cartItemsSlice";
import postOrderReducer from "./postOrderSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cartItems: cartItemsReducer,
    postOrderData: postOrderReducer,
  },
});
