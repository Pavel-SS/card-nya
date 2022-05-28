import { forgotPasswordAPI } from '../f-3-dal/forgotPasswordAPI';
import { forgotPasswordAction } from './forgotPasswordAction';
import { GeneralThunkType } from './../../../../s-1-main/m-2-bll/store';
import axios from 'axios';


//thunk

export const forgotPasswordThunk = (email: string): GeneralThunkType => async dispatch => {
    dispatch(forgotPasswordAction.setLoading(true))
    dispatch(forgotPasswordAction.setError(''))
    try {
        await forgotPasswordAPI.instructionSend(email)
        dispatch(forgotPasswordAction.setSucccess(true))
    } catch (e) {
        if (axios.isAxiosError(e)){
            dispatch(forgotPasswordAction.setError(e.response ? e.response.data.error : e.message))
        } else {
            dispatch(forgotPasswordAction.setError('Some error'))
        }
    } finally {
        dispatch(forgotPasswordAction.setLoading(false))
    }
}