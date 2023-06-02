import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navContext } from '../context/navContext';
import { useLocation } from 'react-router-dom';

type appNamesKey = '/bin2Dec' | '/' | '/calc';

export default function Header() {
  const { navPanel, open, close } = useContext(navContext);
  const [lang, setLang] = useState('ru-RU');
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const pagesNames = {
    '/bin2Dec': t('header.bin2Dec'),
    '/': t('header.home'),
    '/calc': t('header.calc'),
  }

  const pageName = pagesNames[location.pathname as appNamesKey]

  const changeLangHanlder = () => {
    const newLang = lang === 'ru-RU' ? 'en-US' : 'ru-RU';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  const buttonOpen = (
    <button onClick={() => open()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );

  const buttonCLose = (
    <button onClick={() => close()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-x-lg"
        viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </button>
  );

  return (
    <header>
      <div className="flex  bg-black bg-opacity-70 justify-between items-center px-4 py-5 shadow-lg shadow-orange-800 text-white">
        <h1 className="px-3 font-extrabold text-3xl">
          <a href="/">Veroled</a>
        </h1>
        <h1 className="px-3 font-extrabold text-3xl">{pageName}</h1>
        <nav>
          <ul className="flex space-x-4 mr-5">
            <li>
              <button onClick={changeLangHanlder} className=" text-xl">
                {t('header.lang')}
              </button>
            </li>
            <li>{!navPanel ? buttonOpen : buttonCLose}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
