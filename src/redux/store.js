import { configureStore } from '@reduxjs/toolkit';

import { catsReducer } from './cats/cats.slice';

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});
