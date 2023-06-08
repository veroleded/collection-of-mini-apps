import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="m-6 w-1/2">
      <p>{t('main.description')}</p>
    </div>
  );
};

export default Main;
