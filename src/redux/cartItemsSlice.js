import { api } from "api/api";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fromStrToNum } from "helper/helper";

const calculateAmount = (cartItems) =>
  cartItems.reduce((sum, elem) => sum + elem.quantity, 0);

const calculateTotal = (cartItems) =>
  cartItems.reduce(
    (sum, elem) => sum + elem.quantity * fromStrToNum(elem.price),
    0
  );

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchItems",
  async () => {
    try {
      const data = await api.get("/cartItems");
      if (data) {
        return data.data;
      }
    } catch (e) {
      throw new Error(e);
    }
  }
);

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
    amount: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (elem) => elem.id === action.payload.id
      );

      if (item) {
        if (item.quantity === 10) return;
        item.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.amount = calculateAmount(state.cartItems);
      state.total = calculateTotal(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const updateItems = state.cartItems.filter(
        (elem) => elem.id !== action.payload
      );
      state.cartItems = updateItems;
      state.amount = calculateAmount(state.cartItems);
      state.total = calculateTotal(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((elem) => elem.id === action.payload);
      if (item) {
        item.quantity++;
        state.amount += 1;
      }
      state.total = calculateTotal(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((elem) => elem.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          state.amount -= 1;
        }
      }
      state.total = calculateTotal(state.cartItems);
    },
    cleanCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.amount = state.cartItems.length;
        if (state.cartItems) {
          state.loading = false;
        }
        state.total = calculateTotal(state.cartItems);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  cleanCart,
} = cartItemsSlice.actions;
export const cartItemsReducer = cartItemsSlice.reducer;
