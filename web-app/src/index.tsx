import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import init from './init';


const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const vdom = await init();
  root.render(<>{vdom}</>);
}

run();