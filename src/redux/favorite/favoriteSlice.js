import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const newFavoriteCar = action.payload;
      state.items.push(newFavoriteCar);
    },
    removeFavorites: (state, action) => {
      const removeCar = action.payload;
      state.items = state.items.filter((car) => car.id !== removeCar.id);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
