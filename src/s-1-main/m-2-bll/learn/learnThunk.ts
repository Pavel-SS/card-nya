import { getRandomeCards } from '../../../utils/getRandom';
import { learnActions } from './learnAction';
import { cardsAPI } from '../../../s-2-features/f-4-cards/c-3-api/cardsAPI';
import { appAction } from '../../app/appAction';
import { GeneralThunkType } from '../store';
import { networkErrorHandler } from '../../../utils/networkErrorHandler';

export const learnCardsThunk = (cardsPack_id: string): GeneralThunkType => async(dispatch, getState) => {
    dispatch(appAction.setAppLoading(true))
    try {
        const pageCount = getState().packs.maxCardsCount
        const response = await cardsAPI.getCards({cardsPack_id, pageCount})
        dispatch(learnActions.setCards(response.cards))
        dispatch(learnActions.setRandomCard(getRandomeCards(response.cards)))
    } catch (e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
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