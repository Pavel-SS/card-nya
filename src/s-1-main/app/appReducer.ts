import { InitAppState, InitAppStateType } from './../m-2-bll/initState';
import { AppActionType } from './appAction';


export const appReducer = ( state: InitAppStateType = InitAppState, action: AppActionType ):InitAppStateType => {
    switch (action.type){
        case 'app/SET_STATUS':
        case 'app/SET_ERROR':
        case 'app/SET_LOADING':
            return {...state,...action.payload}
        default:
            return state
    }
}