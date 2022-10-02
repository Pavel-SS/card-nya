import { LearnActionsType } from './learnAction';
import { learnInitialState } from '../initState';
import { LearnInitialStateType } from "../initState";


export const learnReducer = (state: LearnInitialStateType = learnInitialState, action: LearnActionsType): LearnInitialStateType =>{
    switch (action.type) {
        case 'learn/SET_CARDS':
        case 'learn/SET_RANDOM_CARD':
            return { ...state, ...action.payload}
        case 'learn/SET_GRADE':
            return {...state, cards: state.cards.map(card => card._id === action.payload.cardId ? { ...card, grade: action.payload.grade }: card)}
        default:
            return state
    }
    
}

