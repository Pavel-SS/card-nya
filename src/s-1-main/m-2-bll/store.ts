import { CardsActionTypes } from './../../s-2-features/f-4-cards/c-2-bll/cardsActions';
import { cardsReducer } from './../../s-2-features/f-4-cards/c-2-bll/cardsReducer';
import { PacksActionType } from './../../s-2-features/f-3-packs/p-2-bll/packsActions';
import { ProfileActionsType } from './../../s-2-features/f-2-profile/p-2-bll/profileActions';

import { applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import thunkMiddleware,{ ThunkAction } from 'redux-thunk';
import { ExtraArgumentNya } from './thunk';
import  {registerReducer}  from "../../s-2-features/f-1-auth/a-1-register/r-2-bll/registerReducer";
import { RegisterActionsType } from '../../s-2-features/f-1-auth/a-1-register/r-2-bll/RegisterActions';
import { loginReducer } from '../../s-2-features/f-1-auth/a-2-login/l-2-bll/loginReducer';
import { LoginActionType } from '../../s-2-features/f-1-auth/a-2-login/l-2-bll/loginActions';
import { profileReducer } from "../../s-2-features/f-2-profile/p-2-bll/profileReducer";
import { packsReducer } from '../../s-2-features/f-3-packs/p-2-bll/packsReducer';
import { AppActionType } from './../app/appAction';
import { appReducer } from '../app/appReducer';


const rootReducer = combineReducers({
   profile: profileReducer,
   login: loginReducer,
   register: registerReducer,
   packs: packsReducer,
   cards: cardsReducer,
   app: appReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof store.getState>;
export type ActionsType = 
                        ProfileActionsType |
                        LoginActionType | 
                        RegisterActionsType | 
                        PacksActionType |
                        CardsActionTypes |
                        AppActionType;
export type GeneralThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, ExtraArgumentNya, ActionsType>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;