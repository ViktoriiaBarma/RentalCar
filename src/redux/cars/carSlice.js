import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items =
        state.items[0]?.id === action.payload[0]?.id
          ? action.payload
          : [...state.items, ...action.payload];
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = carsSlice.reducer;
