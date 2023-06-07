import { useTranslation } from 'react-i18next';
import routes from '../routes/routes';

type appNamesKey = 'Bin2Dec'| 'Calculator' | 'Paint';

const Navigator = () => {
  const { t } = useTranslation();

  const pagesNames = {
    Bin2Dec: t('header.bin2Dec'),
    Calculator: t('header.calc'),
    Paint: t('header.paint'),
  };

  const links = Object.entries(pagesNames).map(([key, value], index) => (
    <li key={index} >
      <div className=" border-solid border-orange-500 border-b-2 flex justify-left h-full border-collapse">
        <a href={routes[key as appNamesKey]()} className="m-2 text-left w-full">
          {value}
        </a>
      </div>
    </li>
  ));

  return (
    <div className="absolute right-0 bg-black bg-opacity-60 w-max m-0 px-2 h-screen order-0">
      <ul className="list-item flex-col">
        {links}
      </ul>
    </div>
  );
};

export default Navigator;
