
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { selectNewPasswordError, selectNewPasswordIsLoading, selectNewPasswordSuccess } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { setNewPasswordThunk } from "../s-2-bll/setNewPasswordThunk";
import { setNewPasswordAction } from "../s-2-bll/setNewPasswordAction";
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";
import { SetNewPassword } from "./SetNewPassword";


import gnel from "../../../../s-1-main/app/style/gnel.module.scss";


export const SetNewPasswordPage = () => {
    const dispatch = useDispatch()

    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    
    const newPasswordSuccess = useAppSelector(selectNewPasswordSuccess)
    const newPasswordError = useAppSelector(selectNewPasswordError)
    const newPasswordLoading = useAppSelector(selectNewPasswordIsLoading)

    let {exchangePassword} = useParams<'exchangePassword'>()

    const changePassword = useCallback(()=>{
        if (exchangePassword) {
           dispatch(setNewPasswordThunk({newPassword, confirmNewPassword, exchangePassword})) 
        }
    }, [dispatch,newPassword, confirmNewPassword, exchangePassword])

    useEffect(() => {
        return () => {
            dispatch(setNewPasswordAction.setError(''))
        }
    }, [dispatch])

    if (newPasswordSuccess) {
        return <Navigate to={PATH.LOGIN}/>
    }
    return (
        <div className={gnel.block__auth}>
            <SetNewPassword
                newPassword={newPassword}
                confirmNewPassword={confirmNewPassword}
                setNewPassword = {setNewPassword}
                setConfirmNewPassword = {setConfirmNewPassword}
                changePassword={changePassword}
                isLoading = {newPasswordLoading}
                error = {newPasswordError}
            />
        </div>
    )
}