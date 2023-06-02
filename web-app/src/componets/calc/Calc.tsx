import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/calcSlice';
import CalcButton, { buttonsValue } from './CalcButton';
import { RootState } from '../../store';

type Action = 'clear' | 'swapSign' | 'delete' | 'result';

const Calc = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootState) => state.calc);

  const clickHandler = (type: string, value: string, action: string) => (e: React.FormEvent) => {
    e.preventDefault();

    if (type === 'number') {
      dispatch(actions.setNumber(value));
    } else if (type === 'sign') {
      dispatch(actions.setSign({ value, action }));
    } else {
      dispatch(actions[action as Action]())
    }
  };

  return (
    <div className="mt-10 bg-black flex justify-center w-max flex-col bg-opacity-60 rounded-lg shadow-xl shadow-orange-800">
      <div className='m-3'>
      </div>
      <div className="m-5">
        <div className="relative p-3">
          <div
            // value={input}
            className="w- px-4 py-2 w-full h-12 text-white rounded-lg bg-gradient-to-l from-orange-500 bg-orange-300 text-right"
          >
          <p className="text-lg">{input}</p>
          </div>
        </div>
        <div className=" grid grid-cols-4 grid-rows-5">
          {buttonsValue.map((value, index) => (
            <CalcButton buttonValue={value} clickHandler={clickHandler} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calc;
