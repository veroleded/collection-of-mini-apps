import { createSlice } from "@reduxjs/toolkit";

interface State {
  number: number,
  storageNum: number,
  result: number,
  history: Array<string | number>,
};

const initialState: State = {
  number: 0,
  storageNum: 0,
  result: 0,
  history: [],
};

const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    setNumber: (state, { payload }) => {
      state.number = Number(state.number + payload);
    },
    inc: (state) => {
      if (state.history.length !== 0) {
        state.history.push('=', state.result);
      }
      state.history.push('+', state.number);
      state.result = state.result + state.number;
      state.number = 0;
    }
  }
});

export const { setNumber, inc } = calcSlice.actions;

export default calcSlice.reducer;