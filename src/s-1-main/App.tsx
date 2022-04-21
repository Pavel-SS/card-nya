import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { HeaderMenu } from './m-1-ui/main/HeaderMenu';
import { RouteFunc } from './m-1-ui/main/routes/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <HeaderMenu/>
        <RouteFunc/>
      </HashRouter>
    </div>
  );
}

export default App;
