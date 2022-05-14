import {  CardsActionTypes } from './cardsActions';
import { InitialCardStateType, InitialCardState } from './../../../s-1-main/m-2-bll/initState';



export const cardsReducer = (state: InitialCardStateType = InitialCardState, action: CardsActionTypes): InitialCardStateType => {
    switch (action.type){
        case 'cards/SET_CARDS':
        case 'cards/SET_CARDS_NAME':
        case 'cards/SET_CARDS_COUNT':
            return {...state, ...action.payload}
        case 'cards/SET_CARDS_ID':
        case 'cards/SET_CARDS_PAGE_COUNT':
        case 'cards/SET_CURRENT_PAGE':
        case 'CARDS/SET_ANSWER_SEARCH':
        case 'CARDS/SET_QUESTION_SEARCH':
        case 'CARDS/SET_SORT_PARAMETERS':
            return {...state, params:{...state.params, ...action.payload}}
        default:
            return state
    }
}