import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";
import { selectRegistrationError, selectRegistrationIsLoading, selectRegistrationSuccess } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { registerActions } from "../r-2-bll/RegisterActions";
import { registerThunk } from "../r-2-bll/registerThunk";
import { Registration } from "./Register";

import gnel from "../../../../s-1-main/app/style/gnel.module.scss";

export const RegistrationPage  = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const registerSuccess = useAppSelector(selectRegistrationSuccess);  
    const registerIsLoading = useAppSelector(selectRegistrationIsLoading);
    const registerError = useAppSelector(selectRegistrationError);
    
    const signUp = useCallback(()=>{
        dispatch(registerThunk({email,password,confirmPassword}))
    },[dispatch,email,password,confirmPassword])

    useEffect(()=> {
        return ()=> {
            dispatch(registerActions.setError(''))
        }
    },[dispatch])

    if(registerSuccess){
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={gnel.block__auth}>
            <Registration
                error = {registerError}
                isLoading={registerIsLoading} 
                password={password}
                confirmPassword={confirmPassword}
                email={email}
                signUp={signUp}
                navigate={navigate}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setEmail = {setEmail}
            />
        </div>
    )
}