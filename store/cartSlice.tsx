import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { products } from '../data/Data';

interface Product {
  ListingName: string;
  Price: number;
  Quantity: number; // Add Quantity field
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.ListingName === action.payload.ListingName);
      if (existingItem) {
        existingItem.Quantity += 1;
      } else {
        state.items.push({ ...action.payload, Quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.ListingName !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ ListingName: string; newQuantity: number }>) => {
      const itemToUpdate = state.items.find(item => item.ListingName === action.payload.ListingName);
      if (itemToUpdate) {
        itemToUpdate.Quantity = action.payload.newQuantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalAmount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.Price * item.Quantity, 0);

export default cartSlice.reducer;
