import React from 'react';

type buttonValue = {
  value: string;
  type: 'action' | 'number' | 'sign';
  action: string;
};

export const buttonsValue: buttonValue[] = [
  { value: 'C', type: 'action', action: 'clear' },
  { value: '+/-', type: 'action', action: 'swapSign' },
  { value: '/', type: 'sign', action: 'divide' },
  { value: '<', type: 'action', action: 'delete' },
  { value: '9', type: 'number', action: 'setNumber' },
  { value: '8', type: 'number', action: 'setNumber' },
  { value: '7', type: 'number', action: 'setNumber' },
  { value: 'x', type: 'sign', action: 'multiply' },
  { value: '6', type: 'number', action: 'setNumber' },
  { value: '5', type: 'number', action: 'setNumber' },
  { value: '4', type: 'number', action: 'setNumber' },
  { value: '-', type: 'sign', action: 'dec' },
  { value: '3', type: 'number', action: 'setNumber' },
  { value: '2', type: 'number', action: 'setNumber' },
  { value: '1', type: 'number', action: 'setNumber' },
  { value: '+', type: 'sign', action: 'inc' },
  { value: '0', type: 'number', action: 'setNumber' },
  { value: '.', type: 'number', action: 'setNumber'},
  { value: '=', type: 'action', action: 'result' },
];

const CalcButton = (props: {
  buttonValue: buttonValue;
  clickHandler: (type: string, value: string, action: string) => React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { buttonValue, clickHandler } = props;
  const { value, type, action } = buttonValue;
  const colorClass = type === 'number' ? 'bg-orange-400' : 'bg-orange-500';
  const colSpanClass = value === '0' ? 'col-span-2' : ''

  return (
    <button
      className={`rounded-full p-1 m-2 shadow-md hover:shadow-white active:bg-orange-600 active:shadow-sm active:shadow-white ${colorClass} ${colSpanClass}`}
      onClick={clickHandler(type, value, action)}>
      <span className="p-2">{value}</span>
    </button>
  );
};

export default CalcButton;