import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Converter from './Converter';
import { AppSelectProvider, navContext } from '../context/navContext';
import Navigator from './Navigator';
import Main from './Main';
import Calc from './calc/Calc';
import Paint from './Paint';
import routes from '../routes/routes';

function App() {
  const getClassNames = (selectEl: boolean): string =>
    selectEl
      ? 'flex justify-center ml-48 h-full items-start p-0'
      : 'flex justify-center h-full items-start p-0';

  return (
    <BrowserRouter>
      <AppSelectProvider>
        <div className="bg-gradient-to-l from-orange-500 bg-orange-300 text-white">
          <Header />
          <navContext.Consumer>
            {({ navPanel }) => (
              <div className={getClassNames(navPanel)}>
                <div className="flex justify-center w-5/6">
                  <Routes>
                    <Route path={routes.Main()} element={<Main />} />
                    <Route path={routes.Bin2Dec()} element={<Converter />} />
                    <Route path={routes.Calculator()} element={<Calc />} />
                    <Route path={routes.Paint()} element={<Paint />} />
                  </Routes>
                </div>
                  <navContext.Consumer>
                    {({ navPanel }) => <>{navPanel && <Navigator />}</>}
                  </navContext.Consumer>
              </div>
            )}
          </navContext.Consumer>
        </div>
      </AppSelectProvider>
    </BrowserRouter>
  );
}

export default App;
