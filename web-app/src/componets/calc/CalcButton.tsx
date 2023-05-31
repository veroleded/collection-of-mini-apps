import React from 'react';

type buttonValue = {
  value: string;
  type: 'action' | 'number';
  reducer: string;
};

export const buttonsValue: buttonValue[] = [
  { value: 'C', type: 'action', reducer: 'clear' },
  { value: '+/-', type: 'action', reducer: 'swapSign' },
  { value: '%', type: 'action', reducer: 'percent' },
  { value: '/', type: 'action', reducer: 'divide' },
  { value: '9', type: 'number', reducer: 'setNumber' },
  { value: '8', type: 'number', reducer: 'setNumber' },
  { value: '7', type: 'number', reducer: 'setNumber' },
  { value: '*', type: 'action', reducer: 'multiply' },
  { value: '6', type: 'number', reducer: 'setNumber' },
  { value: '5', type: 'number', reducer: 'setNumber' },
  { value: '4', type: 'number', reducer: 'setNumber' },
  { value: '-', type: 'action', reducer: 'dec' },
  { value: '3', type: 'number', reducer: 'setNumber' },
  { value: '2', type: 'number', reducer: 'setNumber' },
  { value: '1', type: 'number', reducer: 'setNumber' },
  { value: '+', type: 'action', reducer: 'inc' },
  { value: '0', type: 'number', reducer: 'setNumber' },
  { value: '=', type: 'action', reducer: 'result' },
];

const CalcButton = (props: {
  buttonValue: buttonValue;
  clickHandler: (value: string, reducer: string) => React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { buttonValue, clickHandler } = props;
  const { value, type, reducer } = buttonValue;
  const colorClass = type === 'number' ? 'bg-orange-400' : 'bg-orange-500';

  return (
    <button
      className={`rounded-full p-1 m-2 shadow hover:shadow-white focus:bg-orange-600 ${colorClass}`}
      onClick={clickHandler(reducer, value)}>
      <span className="p-2">{value}</span>
    </button>
  );
};

export default CalcButton;