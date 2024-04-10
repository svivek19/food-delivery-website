import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
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
