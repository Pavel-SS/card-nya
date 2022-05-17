import { getRandomeCards } from './../../../../utils/getRandom';
import { learnActions } from './learnAction';
import { cardsAPI } from './../../../f-4-cards/c-3-api/cardsAPI';
import { appAction } from './../../../../s-1-main/app/appAction';
import { GeneralThunkType } from './../../../../s-1-main/m-2-bll/store';
import { networkErrorHandler } from '../../../../utils/networkErrorHandler';

export const learnCardsThunk = (cardsPack_id: string): GeneralThunkType => async(dispatch, getState) => {
    dispatch(appAction.setAppLoading(true))
    try {
        const pageCount = getState().packs.maxCardsCount
        const response = await cardsAPI.getCards({cardsPack_id, pageCount})
        dispatch(learnActions.setCards(response.cards))
        dispatch(learnActions.setRandome(getRandomeCards(response.cards)))
    } catch (e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}