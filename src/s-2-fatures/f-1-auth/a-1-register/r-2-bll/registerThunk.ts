import { RegisterActionsType, registerActions } from './RegisterActions';
import { AppRootStateType } from './../../../../s-1-main/m-2-bll/store';
import { ThunkAction } from "redux-thunk";
import { ExtraArgumentNya, ReturnVoid, tryCatch } from "../../../../s-1-main/m-2-bll/thunk";
import { registrationAPI } from '../r-3-dal/registerAPI';
import axios from 'axios';


//thunk
export const signUpThunk = (email:string, password:string, confirmPassword:string): ThunkAction<ReturnVoid, AppRootStateType, ExtraArgumentNya, RegisterActionsType> => async(
    dispatch
)=> {
    dispatch(registerActions.setLoading(true))
    dispatch(registerActions.setError(''))
    if (password !== confirmPassword) {
        dispatch(registerActions.setError('Password confirmation failed!'))
        dispatch(registerActions.setLoading(false))
    }else{
        try {
            await registrationAPI.signUp(email,password)
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
    // await tryCatch(
    //     async() => {
    //         if (password !== confirmPassword) {
    //             dispatch(registerActions.setError("Passwords don't same"))
    //         } else {
    //             dispatch(registerActions.setSucccess(true))
    //         }
    //     },
    //     (e)=> dispatch(registerActions.setError(e))
    // )
}

