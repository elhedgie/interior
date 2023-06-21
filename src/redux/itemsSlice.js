import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api/api";
import { filterItemsHelper } from "helper/filter";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  try {
    const data = await api.get("/items");
    if (data) {
      return data.data;
    }
  } catch (e) {
    throw new Error(e);
  }
});
const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    loading: false,
    error: null,
    filterValue: "new",
  },
  reducers: {
    filterItems: (state, action) => {
      console.log(state.items);
      const filteredItems = filterItemsHelper(action.payload, state.items);
      state.items = filteredItems;
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        if (state.items) {
          state.loading = false;
        }
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterItems } = itemsSlice.actions;
export default itemsSlice.reducer;
