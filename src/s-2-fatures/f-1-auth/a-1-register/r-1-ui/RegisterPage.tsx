import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";
import { selectRegistrationError, selectRegistrationIsLoading, selectRegistrationSuccess } from "../../../../s-1-main/m-2-bll/selectors";
import { AppRootStateType, useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { registerActions } from "../r-2-bll/RegisterActions";
import { signUpThunk } from "../r-2-bll/registerThunk";
import { Registration } from "./Register";


export const RegistrationPage  = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');

    const registerSuccess = useAppSelector(selectRegistrationSuccess);  
    const registerIsLoading = useAppSelector(selectRegistrationIsLoading);
    const registerError = useAppSelector(selectRegistrationError);
    
    const toSignUp = useCallback(()=>{
        dispatch(signUpThunk(email,password,confirmPass))
    },[dispatch,email,password,confirmPass])

    useEffect(()=> {
        return ()=> {
            dispatch(registerActions.setError(''))
        }
    },[dispatch])

    if(registerSuccess){
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <>
            <Registration 
                error = {registerError}
                isLoading={registerSuccess} 
                password={password}
                confirmPassword={confirmPass}
                email={email}
                signUp={toSignUp}
                navigate={navigate}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPass}
                setEmail = {setEmail}
            />
        </>
    )
}