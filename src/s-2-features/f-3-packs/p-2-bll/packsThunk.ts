import { packsActions } from './packsActions';
import { AddCardType, packsAPI, UpdatePackType } from './../p-3-api/packsAPI';
import { appAction } from './../../../s-1-main/app/appAction';
import { GeneralThunkType } from "../../../s-1-main/m-2-bll/store";
import { networkErrorHandler } from '../../../utils/networkErrorHandler';

export const getPacks = (): GeneralThunkType => async (dispatch, getState) => {
    const getParam = getState().packs.params
    dispatch(appAction.setAppLoading(true))
    try {
        const data = await packsAPI.getPacks(getParam)
        dispatch(packsActions.setCountCardsInPacks(data.cardPacksTotalCount))
        dispatch(packsActions.setPacks(data.cardPacks))
    } catch(e){
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const addPacks = ( name: string, privateStatus: boolean, deckCover:string =''): GeneralThunkType => async (dispatch) => {
    const cardsPack: AddCardType = {cardsPack: {name, deckCover, private: privateStatus}}
    dispatch(appAction.setAppLoading(true))
    try {
        await packsAPI.addPacks(cardsPack)
        await dispatch(getPacks())
        dispatch(packsActions.setCurrentPage(1))
        dispatch(appAction.setAppStatus(`Pack ${name} added`))
    } catch(e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const delPacks = (id:string, name: string): GeneralThunkType => async (dispatch) => {
    dispatch(appAction.setAppLoading(true))
    try {
        await packsAPI.deletePack(id)
        await dispatch(getPacks())
        dispatch(appAction.setAppStatus(`Pack ${name} deleted`)) 
    } catch(e){
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

export const updatePacks = (_id: string, name: string, oldName: string): GeneralThunkType => async (dispatch) => {
    const cardsPack: UpdatePackType = {cardsPack: {_id, name}}
    dispatch(appAction.setAppLoading(true))
    try {
        await packsAPI.updatePack(cardsPack)
        await dispatch(getPacks())
        dispatch(appAction.setAppStatus(`Pack ${oldName} rename to ${name}`))
    } catch (e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(appAction.setAppLoading(false))
    }
}

