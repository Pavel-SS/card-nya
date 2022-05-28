import { SetNewPasswordActionType } from './setNewPasswordAction';
import { InitStateType, InitState } from "../../../../s-1-main/m-2-bll/initState";

export const setNewPasswordReducer = (state: InitStateType = InitState, action: SetNewPasswordActionType): InitStateType => {
    switch (action.type) {
        case 'newPassword/SET_LOADING':
        case 'newPassword/SET_SUCCESS':
        case 'newPassword/SET_ERROR':
            return {...state, ...action.payload}
        default: {
            return state
        }
    }
}