import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Converter = () => {
  const { t } = useTranslation();
  const [validity, setValidity] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const regex = /^(0|1)+$/;
    setInputValue(value);
    if (value.match(regex)) {
      setValidity(true);
    } else {
      setValidity(false);
    }

  }

  const errors = {
    mustNumber: t('bin2Dec.errors.mustNumber')
  }

  const placeholder = t('bin2Dec.placeholder');

  return (
    <div className="mt-10 bg-black bg-opacity-60 w-1/2 flex-wrap h-96 rounded-lg shadow-xl shadow-orange-800">
      <div className="m-5 p-6">
        <form className="flex justify-start">
          <div className="relative w-3/4">
            <input
              type="text"
              name="binaryNumber"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-md"
              placeholder={placeholder}
              value={inputValue}
              onChange={changeHandler}
            />
          </div>
          <button className=" hover:bg-blue-700 text-white font-bold ml-5 p-2 rounded-lg bg-gradient-to-l from-orange-500 bg-orange-300">
            {t('bin2Dec.convert')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Converter;
