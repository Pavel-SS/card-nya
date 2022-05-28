import { ForgotPasswordActionType } from './forgotPasswordAction';
import { InitStateType, InitState } from './../../../../s-1-main/m-2-bll/initState';


export const forgotPasswordReducer = (state: InitStateType = InitState, action: ForgotPasswordActionType): InitStateType => {
    switch (action.type) {
        case 'forgotPassword/SET_LOADING':
        case 'forgotPassword/SET_SUCCESS':
        case 'forgotPassword/SET_ERROR':
            return {...state, ...action.payload}
        default: {
            return state
        }
    }
} 