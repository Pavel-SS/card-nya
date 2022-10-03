import { setNewPasswordAction } from './setNewPasswordAction';
import { GeneralThunkType } from './../../../../s-1-main/m-2-bll/store';
import { setNewPasswordAPI, SetNewPasswordDataType } from './../s-3-dal/setNewPasswordAPI';
import axios from 'axios';


//thunk

export const setNewPasswordThunk = ({newPassword, confirmNewPassword, exchangePassword}: SetNewPasswordDataType): GeneralThunkType => async dispatch => {
    dispatch(setNewPasswordAction.setLoading(true))
    dispatch(setNewPasswordAction.setError(''))
    if (newPassword !== confirmNewPassword) {
        dispatch(setNewPasswordAction.setError('Confirm failed!'))
        dispatch(setNewPasswordAction.setLoading(false))
    } else {
        try {
            await setNewPasswordAPI.changePassword({newPassword, exchangePassword})
            dispatch(setNewPasswordAction.setSucccess(true))
        } catch (e) {
            if (axios.isAxiosError(e)){
                dispatch(setNewPasswordAction.setError(e.response ? e.response.data.error : e.message))
            } else {
                dispatch(setNewPasswordAction.setError('Some error'))
            } 
        } finally {
            dispatch(setNewPasswordAction.setLoading(false))
        }
    }
}