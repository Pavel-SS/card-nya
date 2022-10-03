import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectForgotPassError, selectForgotPassIsLoading, selectForgotPassSuccess } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { forgotPasswordAction } from "../f-2-bll/forgotPasswordAction";
import { forgotPasswordThunk } from "../f-2-bll/forgotPasswordThunk";
import { ForgotPassword } from "./ForgotPassword";

import gnel from "../../../../s-1-main/app/style/gnel.module.scss";

export const ForgotPasswordPage = () => {
    
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const success = useAppSelector(selectForgotPassSuccess)
    const error = useAppSelector(selectForgotPassError)
    const loading = useAppSelector(selectForgotPassIsLoading)

    const sendInstrution = useCallback(() => {
        dispatch(forgotPasswordThunk(email))
    }, [dispatch, email])

    useEffect(() => {
        return () => {
            dispatch(forgotPasswordAction.setError(''))
            dispatch(forgotPasswordAction.setSucccess(false))
        }
    }, [dispatch])

    return (
        <div className={gnel.block__auth}>
            <ForgotPassword 
                email = { email } 
                setEmail = { setEmail } 
                toSendInstructions = {sendInstrution}
                isLoading = {loading}
                error = {error}
                check = {success}
            />
        </div>
    )
}