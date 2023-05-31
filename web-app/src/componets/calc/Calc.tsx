import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, setNumber } from '../../store/calcSlice';
import CalcButton, { buttonsValue } from './CalcButton';
const Calc = () => {
  const [action, setAction] = useState('result');
  const dispatch = useDispatch();
  const calc = useSelector((state: ) => state.calc)
  console.log(calc);

  const clickHandler = (reducer: string, value: string) => () => {
    if (reducer === 'setNumber') {
      dispatch(setNumber(value));
    }
  }

  return (
    <div className="mt-10 bg-black flex justify-center bg-opacity-60 h-96 rounded-lg shadow-xl shadow-orange-800">
      <form className="m-3 w-full">
        <div className="relative">
          <input
            type="text"
            name="number"
            className="w-full px-4 py-2 text-white rounded-lg focus:outline-none focus:bg-white focus:shadow-md bg-gradient-to-l from-orange-500 bg-orange-300 text-right"
          />
        </div>
        <div className=" grid grid-cols-4 grid-rows-5">
          {buttonsValue.map((value, index) => (
            <CalcButton buttonValue={value} clickHandler={clickHandler} key={index}/>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Calc;
