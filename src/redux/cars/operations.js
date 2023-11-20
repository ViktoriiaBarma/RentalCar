import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;
// const test = import.meta.env.VITE_API_TEST;

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async function (page, { rejectWithValue }) {
    try {
      const { data } = await axios.get(`?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
