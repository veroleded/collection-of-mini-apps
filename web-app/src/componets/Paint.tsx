import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Paint = () => {
  const { t } = useTranslation();
  const [color, setColor] = useState('');
  const [brush, setBrush] = useState('brush');
  const [brashSizeIsOpen, setBrashSizeIsOpen] = useState(false);
  const [brushSize, setBrushSize] = useState(10);
  const [draw, setDraw] = useState(false);

  const mauseMoveHandler = (e: React.MouseEvent) => {
    console.log('Mouse X: ' + e.clientX);
    console.log('Mouse Y: ' + e.clientY);
  };

  const colorHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setColor(value);
  };

  const brushHundler = (value: string) => (e: React.FormEvent<HTMLButtonElement>) => {
    setBrush(value);
  };

  const getBorderColorForBrashButtons = (value: 'brush' | 'circle' | 'square', brash: string) => {
    if (value === brash) return 'border-white';
    return 'border-orange-500';
  };

  return (
    <div className="w-11/12 h-full bg-orange-500 mt-6 flex justify-center rounded-lg shadow-xl shadow-orange-800">
      <div className="w-max h-max">
        <label htmlFor="input" className="relative cursor-pointer">
          <input
            id="input"
            type="color"
            className="w-full rounded-md py-2 bg-orange-500 focus:border-white invisible"
            value={color}
            onChange={colorHandler}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill={color}
              style={{
                fill: color,
              }}
              className="top-0 right-0 mt-2 mr-2 h-6 w-6 fill-current"
              viewBox="0 0 16 16">
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg>
          </div>
        </label>
        <div>
          <button
            onClick={() => setBrashSizeIsOpen(!brashSizeIsOpen)}
            className="flex justify-center rounded-md p-1 active:border-white  border-orange-500 border-2 border-solid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-border-width"
              viewBox="0 0 16 16">
              <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <div
            className={`${
              brashSizeIsOpen ? 'absolute' : 'hidden'
            } w-32 h-31 p-1 border-solid rounded-md bg-orange-300 bg-gradient-to-l from-orange-500`}>
            <p className="ml-2">{t('paint.size')}:</p>
            <div className="w-full p-2">
              <input
                type="range"
                step="1"
                className="w-full h-1 m bg-white rounded-full appearance-none"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.currentTarget.value))}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={brushHundler('brush')}
            className={`flex justify-center rounded-md p-1 active:border-white  border-2 border-solid ${getBorderColorForBrashButtons(
              'brush',
              brush
            )}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-brush"
              viewBox="0 0 16 16">
              <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
            </svg>
          </button>
        </div>
        <div>
          {' '}
          <button
            onClick={brushHundler('circle')}
            className={`flex justify-center rounded-md p-1 active:border-white  border-2 border-solid ${getBorderColorForBrashButtons(
              'circle',
              brush
            )}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-circle"
              viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </button>
        </div>
        <div>
          <button
            onClick={brushHundler('square')}
            className={`flex justify-center rounded-md p-1 active:border-white  border-2 border-solid ${getBorderColorForBrashButtons(
              'square',
              brush
            )}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-square"
              viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
          </button>
        </div>
        <div>
          <button className="flex justify-center p-1 active:border-white rounded-md border-orange-500 border-2 border-solid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <canvas
        onMouseDown={() => setDraw(true)}
        onMouseUp={() => setDraw(false)}
        className="bg-white w-full h-full"
        onMouseMove={mauseMoveHandler}>
      </canvas>
    </div>
  );
};

export default Paint;
