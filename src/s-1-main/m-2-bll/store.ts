import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import  {registerReducer}  from "../../s-2-fatures/f-1-auth/a-1-register/r-2-bll/registerReducer";

import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    // login: loginReducer,
   register: registerReducer
})


// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootSateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;