import { RegisterActionsType } from './RegisterActions';
import { InitState, InitStateType } from '../../../../s-1-main/m-2-bll/initState';

export const registerReducer = 
    (state: InitStateType = InitState,  action: RegisterActionsType) : InitStateType => {
        switch (action.type) {
            case 'register/SET_LOADING': 
            case 'register/SET_SUCCESS': 
            case 'register/SET_ERROR': 
                return {...state, ...action.payload}
            default: {
                return state
            }
        }
    }