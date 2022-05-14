import { profileActions } from './../../../f-2-profile/p-2-bll/profileActions';
import axios from 'axios';
import { loginAPI, LoginType } from '../l-3-dal/loginAPI';
import { loginActions } from './loginActions';
import { GeneralThunkType } from '../../../../s-1-main/m-2-bll/store';

export const loginThunk = (login: LoginType):GeneralThunkType => async dispatch => {
    dispatch(loginActions.setLoading(true))
    try {
        const res = await loginAPI.login(login)
        dispatch(loginActions.setLogged(true))
        dispatch(profileActions.setUserData(res))
    } catch (e) {
        if (axios.isAxiosError(e)) {
            dispatch(loginActions.setError(e.response ? e.response.data.error : e.message))
        } else {
            dispatch(loginActions.setError('Error'))
        }
    } finally {
        dispatch(loginActions.setLoading(false))
    }
}

export const logoutThunk = ():GeneralThunkType => async dispatch => {
    try {
        await loginAPI.logout()
        dispatch(loginActions.setError(''))
        dispatch(loginActions.setLogged(false))
        //будут еще
    } catch(e){
        if (axios.isAxiosError(e)){
            dispatch(loginActions.setError(e.response ? e.response.data.error : e.message))
        } else {
            dispatch(loginActions.setError('Error'))
        }
    }
}