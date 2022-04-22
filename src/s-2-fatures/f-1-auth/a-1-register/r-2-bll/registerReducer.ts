import { RegisterActionsType } from './RegisterActions';
import { InitState, InitStateType } from '../../../../s-1-main/m-2-bll/initState';




export const registerReducer = 
    (state = InitState,  action: RegisterActionsType) : InitStateType => {
        switch (action.type) {
            case 'register/SET_LOADING': {
                return {
                    ...state,
                    loading: action.loading,
                    success: false,
                    error: ''
                }
            }
            case 'register/SET_SUCCESS': {
                return {
                    ...state,
                    loading: false,
                    success: action.success,
                    error: ''
                }
            }
            case 'register/SET_ERROR': {
                return {
                    ...state,
                    loading: false,
                    success: false,
                    error: action.error
                }
            }
            default: {
                return state
            }
        }
    }