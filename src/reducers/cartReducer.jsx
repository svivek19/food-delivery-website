import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
