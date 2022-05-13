import { LoginActionType } from './loginActions';
import { InitLoginState, InitLoginStateType } from '../../../../s-1-main/m-2-bll/initState';



export const loginReducer = (state: InitLoginStateType = InitLoginState, action: LoginActionType ): InitLoginStateType => {
    switch (action.type){
        case 'login/SET_LOADING':
        case 'login/SET_LOGGED':
        case 'login/SET_ERROR':
            return {...state, ...action.payload}
        default:
            return state
    }
} 