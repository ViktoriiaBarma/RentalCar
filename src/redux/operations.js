import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6554f4d363cafc694fe742d4.mockapi.io/advert';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async function (page, { rejectWithValue }) {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
