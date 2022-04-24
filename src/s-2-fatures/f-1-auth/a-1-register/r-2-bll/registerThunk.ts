import { RegisterActionsType, registerActions } from './RegisterActions';
import { AppRootSateType } from './../../../../s-1-main/m-2-bll/store';
import { ThunkAction } from "redux-thunk";
import { ExtraArgumentNya, ReturnVoid, tryCatch } from "../../../../s-1-main/m-2-bll/thunk";


//thunk
export const signUpThunk = (email:string, password:string, confirmPassword:string): ThunkAction<ReturnVoid, AppRootSateType, ExtraArgumentNya, RegisterActionsType> => async(
    dispatch
)=> {
    dispatch(registerActions.setLoading(true))

    await tryCatch(
        async() => {
            if (password !== confirmPassword) {
                dispatch(registerActions.setError("Passwords don't same"))
            } else {
                dispatch(registerActions.setSucccess(true))
            }
        },
        (e)=> dispatch(registerActions.setError(e))
    )
}