import React, { useEffect } from 'react';
import './App.scss';
import { HeaderMenu } from '../m-1-ui/main/HeaderMenu';
import { RouteFunc } from '../m-1-ui/main/routes/Routes';
import { useDispatch } from 'react-redux';
import { authPage } from '../../s-2-features/f-2-profile/p-2-bll/profileThunk';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authPage)
  },[])

  return (
    <div className="App">
          <HeaderMenu />
          <RouteFunc />
    </div>
  );
}

export default App;
