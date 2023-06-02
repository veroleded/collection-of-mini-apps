import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './calcSlice';

const store = configureStore({
  reducer: {
    calc: calcReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>; //Получаем типизацию store.getState
export type AppDispatch = typeof store.dispatch; //Получаем типизацию store.dispatch