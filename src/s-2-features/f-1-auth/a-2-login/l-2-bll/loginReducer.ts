import { LoginActionType } from './loginActions';
import { InitState, InitStateType } from '../../../../s-1-main/m-2-bll/initState';

export const loginReducer = (state: InitStateType = InitState, action: LoginActionType ): InitStateType => {
    switch (action.type){
        case 'login/SET_LOADING':
        case 'login/SET_LOGGED':
        case 'login/SET_ERROR':
            return {...state, ...action.payload}
        default:
            return state
    }
} 