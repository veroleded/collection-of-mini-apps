import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Converter = () => {
  const { t } = useTranslation();
  const [validity, setValidity] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const regex = /^(0|1)+$/;
    setInputValue(value);
    if (value.match(regex) || value === '') {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(parseInt(inputValue, 2).toString());
  }

  const placeholder = t('bin2Dec.placeholder');

  return (
    <div className="mt-10 bg-black bg-opacity-60 w-1/2 h-96 rounded-lg shadow-xl shadow-orange-800">
      <div className="m-5 flex-wrap">
        <p className="mb-8 mt-8 text-center">{t('bin2Dec.description')}</p>
        {!validity && <div className='m-2 text-red-500'>{t('bin2Dec.errors.mustNumber')}</div>}
        <form onSubmit={submitHandler} className="flex flex-wrap justify-center">
          <div className="relative w-3/4">
            <input
              type="text"
              name="binaryNumber"
              className="w-full px-4 py-2 text-black bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-md"
              placeholder={placeholder}
              value={inputValue}
              onChange={changeHandler}
            />
          </div>
          <button disabled={!validity || inputValue === ''} className=" hover:bg-orange-700 text-white font-bold p-2 rounded-lg bg-gradient-to-l from-orange-500 bg-orange-300">
            {t('bin2Dec.convert')}
          </button>
        </form>
        <div className="h-1/2 mt-12">
        <p className="text-center">{t('bin2Dec.result')}: <span>{result}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
