import React from 'react';
import './App.scss';
import { HeaderMenu } from '../m-1-ui/main/HeaderMenu';
import { RouteFunc } from '../m-1-ui/main/routes/Routes';



function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
          <HeaderMenu />
          <RouteFunc />
    </div>
  );
}

export default App;
