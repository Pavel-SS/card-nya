import { ProfileActionsType } from './profileActions';
import { InitProfileStateType, InitProfileState } from '../../../s-1-main/m-2-bll/initState';


export const profileReducer = (state: InitProfileStateType = InitProfileState, action: ProfileActionsType ): InitProfileStateType => {
    switch (action.type) {
        case 'profile/SET_EDIT':
        case 'profile/SET_OBTAIN':
        case 'profile/SET_USER_DATA':
        case 'profile/SET_INITIALIZE':
            return {...state, ...action.payload}
        default: 
            return state
    }
}