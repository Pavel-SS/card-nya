import { RegisterDataType } from '../r-3-dal/registerAPI';
import { registerActions } from './RegisterActions';
import { GeneralThunkType } from '../../../../s-1-main/m-2-bll/store';

import { registrationAPI } from '../r-3-dal/registerAPI';
import axios from 'axios';


//thunk
export const signUpThunk = ({email, password, confirmPassword}:RegisterDataType): GeneralThunkType => async dispatch => {
    dispatch(registerActions.setLoading(true))
    dispatch(registerActions.setError(''))
    if (password !== confirmPassword) {
        dispatch(registerActions.setError('Password confirmation failed!'))
        dispatch(registerActions.setLoading(false))
    }else{
        try {
            await registrationAPI.signUp({email,password})
            dispatch(registerActions.setSucccess(true))
        } catch(e) {
            if (axios.isAxiosError(e)){
                dispatch(registerActions.setError(e.response ? e.response.data.error : e.message))
            } else {
                dispatch(registerActions.setError('Some error'))
            }
        } finally {
            dispatch(registerActions.setLoading(false))
        }
    }
}

