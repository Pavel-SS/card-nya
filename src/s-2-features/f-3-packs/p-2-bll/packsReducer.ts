import { PacksActionType } from './packsActions';
import { InitPackStateType, InitPackState} from './../../../s-1-main/m-2-bll/initState';


export const packsReducer = (state: InitPackStateType = InitPackState, action: PacksActionType): InitPackStateType => {
    switch (action.type) {
        case 'packs/SET_PACKS':
        case 'packs/SET_COUNT_CARD_IN_PACKS':
        case 'packs/SET_MIN_CARDS_COUNT':
        case 'packs/SET_MAX_CARDS_COUNT':  
        case 'packs/SET_PACKS_STATUS':
            return {...state, ...action.payload}
        case 'packs/SET_CURRENT_PAGE':
        case 'packs/SET_SEARCH':
        case 'packs/SET_USER_PACKS':
        case 'packs/SET_SORT_PARAMETERS':
        case 'packs/SET_PACKS_MIN':
        case 'packs/SET_PACKS_MAX':
        case 'packs/SET_PAGE_COUNT':
            return {...state, params: {...state.params, ...action.payload}}
        default:
            return state
    }
}