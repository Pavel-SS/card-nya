import { networkErrorHandler } from '../../../utils/networkErrorHandler';
import { cardsAPI } from '../../../s-2-features/f-4-cards/c-3-api/cardsAPI';
import { appAction } from '../../app/appAction';
import { LearnActionsType, learnActions } from './learnAction';
import { learnInitialState } from '../initState';
import { LearnInitialStateType } from "../initState";
import { GeneralThunkType } from '../store';

export const learnReducer = (state:  LearnInitialStateType = learnInitialState, action: LearnActionsType): LearnInitialStateType =>{
    switch (action.type) {
        case 'learn/SET_CARDS':
        case 'learn/SET_RANDOME_CARDS':
            return { ...state, ...action.payload}
        case 'learn/SET_GRADE':
            return {
                ...state, 
                cards: state.cards.map(card => card._id === action.payload.id? 
                    {...card, grade: action.payload.grade}: 
                    card)
            }
        default: 
            return state
    }
}

export const rate = (grade: number, card_id: string): GeneralThunkType => async(dispatch) => {
    dispatch(appAction.setAppLoading(true))
    try {
        const randomeGradeCard = await cardsAPI.rate({grade, card_id})
        dispatch(appAction.setAppStatus('Card successfully rated'))
        dispatch(learnActions.setGrade(card_id, randomeGradeCard))
    } catch(e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}