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
      const idToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
    increaseQuantity(state, action) {
      const idToIncrement = action.payload.id;
      const itemToIncrement = state.items.find(
        (item) => item.id === idToIncrement
      );

      if (itemToIncrement) {
        itemToIncrement.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const idToDecrement = action.payload.id;
      const itemToDecrement = state.items.find(
        (item) => item.id === idToDecrement
      );

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity--;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
