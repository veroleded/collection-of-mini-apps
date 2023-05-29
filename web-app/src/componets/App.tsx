import Header from './Header';
import Converter from './Converter';
import { AppSelectProvider, selectAppContext } from '../context/context';
import Navigator from './Navigator';

function App() {

  const getClassNames = (selectEl: boolean): string =>
    selectEl
      ? 'flex justify-between ml-48 min-h-full items-start p-0'
      : 'flex justify-center min-h-full items-start p-0';

  return (
    <AppSelectProvider>
      <div className='bg-gradient-to-l from-orange-500 bg-orange-300 text-white'>
      <Header />
      <selectAppContext.Consumer>
        {({ selectEl }) => (
          <div className={getClassNames(selectEl)}>
            <Converter />
            <selectAppContext.Consumer>
              {({ selectEl }) => <>{selectEl && <Navigator />}</>}
            </selectAppContext.Consumer>
          </div>
        )}
      </selectAppContext.Consumer>
      </div>
    </AppSelectProvider>
  );
}

export default App;
