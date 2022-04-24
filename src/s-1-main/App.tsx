import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { HeaderMenu } from './m-1-ui/main/HeaderMenu';
import { RouteFunc } from './m-1-ui/main/routes/Routes';
import {store} from './m-2-bll/store'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <HeaderMenu />
            <RouteFunc />
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
