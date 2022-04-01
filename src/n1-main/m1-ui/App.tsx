import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { RoutesFunc } from './routes/Routes';

export const App = () => {
  return (
    <div className="App">
      <>
        <HashRouter>

          <Header />
          <RoutesFunc />

        </HashRouter>
        <Main />
      </>
    </div>
  );
}


