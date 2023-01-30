import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/index'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
