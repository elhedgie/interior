import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api/api";

export const postData = createAsyncThunk("order/postData", async (data) => {
  try {
    const res = await api.post("/post/data", data);
    if (!res.ok) {
      throw Error("Failed");
    }
    return res;
  } catch (e) {
    throw new Error(e);
  }
});

const postOrderSlice = createSlice({
  name: "postOrder",
  initialState: {
    orderStatus: null,
    orderLoading: false,
    orderError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.orderLoading = true;
        state.orderStatus = null;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.orderStatus = action.payload.status;
      })
      .addCase(postData.rejected, (state, action) => {
        state.orderStatus = null;
        state.orderLoading = false;
        state.orderError = action.error.message;
      });
  },
});

export default postOrderSlice.reducer;
