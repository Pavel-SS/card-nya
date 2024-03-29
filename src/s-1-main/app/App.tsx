import React, { useEffect } from 'react';

import { HeaderMenu } from '../m-1-ui/main/HeaderMenu';
import { RouteFunc } from '../m-1-ui/main/routes/Routes';
import { useDispatch } from 'react-redux';
import { authPage } from '../../s-2-features/f-2-profile/p-2-bll/profileThunk';
import { useAppSelector } from '../m-2-bll/store';
import { selectAppIsLoading, selectProfileInitialize } from '../m-2-bll/selectors';
import { Preloader } from '../../s-0-common/c-1-ui/Preloader/Preloader';
import { BtnScrol } from '../../s-0-common/c-1-ui/BtnScroll/BtnScroll';

import './App.scss';
import s from './App.module.scss'

function App() {
  
  const initialize = useAppSelector(selectProfileInitialize)
  const loading = useAppSelector(selectAppIsLoading) 
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authPage())
  },[dispatch])

  if (!initialize) {
    return (
      <div className={s.appProgress}><Preloader/></div>
    )
  }

  return (
    <div className="App">
          <HeaderMenu />
          {loading && <div className={s.appProgress}><Preloader/></div>}
          <RouteFunc />
          <BtnScrol />
    </div>
  );
}

export default App;
