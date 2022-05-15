import { cardsActions } from './cardsActions';
import { cardsAPI, AddCardType, UpdateCardType} from './../c-3-api/cardsAPI';
import { appAction } from "../../../s-1-main/app/appAction";
import { GeneralThunkType } from "../../../s-1-main/m-2-bll/store";
import { networkErrorHandler } from '../../../utils/networkErrorHandler';

export const getCards = (): GeneralThunkType => async(dispatch,  getState) => {
    const getParam = getState().cards.params
    dispatch(appAction.setAppLoading(true))
    try {
        const data = await  cardsAPI.getCards(getParam)
        dispatch(cardsActions.setCardsCount(data.cardsTotalCount))
        dispatch(cardsActions.setCards(data.cards))
    } catch(e) {
        networkErrorHandler(dispatch,  e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const addCards = (cardsPack_id:string, question:string, answer:string):GeneralThunkType => async(dispatch) => {
    const card: AddCardType = {card:{cardsPack_id, question, answer}}
    dispatch(appAction.setAppLoading(true))
    try {
        await cardsAPI.addCards(card)
        await dispatch(getCards())
        dispatch(appAction.setAppStatus('Added new card'))
    } catch (e) {
        networkErrorHandler(dispatch,  e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const delCard = (id: string): GeneralThunkType => async(dispatch) => {
    dispatch(appAction.setAppLoading(true))
    try{
        await cardsAPI.delCard(id)
        await dispatch(getCards())
        dispatch(appAction.setAppStatus('Card was deleted'))
    } catch(e) {
        networkErrorHandler(dispatch,  e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const updateCard = (_id: string, question: string, answer: string): GeneralThunkType => async (dispatch) => {
    const card: UpdateCardType = {card: {_id, question, answer}}
    dispatch(appAction.setAppLoading(true))
    try{
        await cardsAPI.updateCard(card)
        await dispatch(getCards())
        dispatch(appAction.setAppStatus('Card was updated'))
    } catch(e) {
        networkErrorHandler(dispatch,  e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}
