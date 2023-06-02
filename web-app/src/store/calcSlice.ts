import { createSlice } from '@reduxjs/toolkit';
import Calculator from '../componets/calc/utils';

type TSignName = 'inc' | 'dec' | 'multiply' | 'divide';

interface ISign {
  name: TSignName;
  value: string | null;
}

interface IState {
  input: string;
  sign: ISign;
  numberOne: string;
  numberTwo: string;
  mode: 'numberOne' | 'numberTwo';
}

const initialState: IState = {
  input: '',
  sign: {
    name: 'inc',
    value: null,
  },
  numberOne: '',
  numberTwo: '',
  mode: 'numberOne',
};

const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    setNumber: (state, { payload }) => {
      if (!state.sign.value && state.numberTwo === '') {
        if(state.numberOne.length < 9){
          state.mode = 'numberOne';
          state.numberOne += payload;
          state.input = state.numberOne;
        }
      } else {
        if (state.numberTwo.length < 9) {
          state.mode = 'numberTwo';
          state.numberTwo += payload;
          state.input = state.numberTwo;
        }
      }
    },

    setSign: (state, { payload: { value, action } }) => {
      if (state.numberOne) {
        if (state.numberOne !== '' && state.numberTwo !== '') {
          state.numberOne = Calculator[state.sign.name](
            state.numberOne,
            state.numberTwo
          ).toString();
          state.numberTwo = '';
        }
        state.sign.value = value;
        state.sign.name = action;
        state.input = state.sign.value as string;
      }
    },

    clear: (state) => {
      state.input = '';
      state.sign = {
        name: 'inc',
        value: null,
      };
      state.numberOne = '';
      state.numberTwo = '';
      state.mode = 'numberOne';
    },

    swapSign: (state) => {
      if (state.input.match(/[0-9]/)) {
        state.input = state.input.includes('-') ? state.input.slice(1) : '-'.concat(state.input);
        state[state.mode] = state.input;
      }
    },

    result: (state) => {
      state.input = Calculator[state.sign.name as TSignName](
        state.numberOne,
        state.numberTwo
      ).toString();
      state.numberOne = state.input;
      state.numberTwo = '';
      state.sign = {
        name: 'inc',
        value: null,
      };
      // state.finish = false;
    },

    delete: ((state) => {
      state.input = state.input.slice(0, -1);
      state[state.mode] = state.input;
    })
  },
});

export const actions = calcSlice.actions;

export default calcSlice.reducer;
