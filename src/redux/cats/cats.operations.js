// axios.defaults.baseURL = 'http://localhost:3001/api/';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pet-shelter-api.onrender.com/api/';

export const fetchCats = createAsyncThunk(
  'cats/getCatList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cats');
      return response.data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCat = createAsyncThunk(
  'cats/getOneCat',
  async (catId, thunkAPI) => {
    try {
      const response = await axios.get(`/cats/${catId}`);
      return response.data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCatsList = createAsyncThunk(
  'cats/getFilteredCatsList',
  async (searchQuery, thunkAPI) => {
    try {
      const response = await axios.get(`/cats${searchQuery}`);
      return response.data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
