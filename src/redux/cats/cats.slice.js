import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCats,
  fetchOneCat,
  fetchFilteredCatsList,
} from './cats.operations';

const catsInitialState = {
  catsFilter: '',
  cats: {},
  currentCat: {},
  isLoading: false,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState: catsInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.catsFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCats.fulfilled, (state, { payload }) => {
        state.cats = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCats.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchCats.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchOneCat.fulfilled, (state, { payload }) => {
        state.currentCat = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOneCat.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchOneCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchFilteredCatsList.fulfilled, (state, { payload }) => {
        state.cats = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredCatsList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCatsList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setStatusFilter } = catsSlice.actions;

export const catsReducer = catsSlice.reducer;
