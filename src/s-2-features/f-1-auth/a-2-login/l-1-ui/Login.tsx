import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"
import { Checkbox } from "../../../../s-0-common/c-1-ui/Checkbox/Checkbox"
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText"
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path"
import { selectLoginError, selectLoginIsLoading, selectLoginLogged } from "../../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store"
import { loginActions } from "../l-2-bll/loginActions"
import { loginThunk } from "../l-2-bll/loginThunk"


export const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const loginLogged = useAppSelector(selectLoginLogged);
    const loginLoading = useAppSelector(selectLoginIsLoading);
    const loginError = useAppSelector(selectLoginError);

    useEffect(()=>{
        dispatch(loginActions.setError(''))
    }, [dispatch])

    const clickLogin = useCallback(()=>{
        dispatch(loginThunk({email,password, rememberMe}))
    },[dispatch, email, password, rememberMe])

    if (loginLogged){
        return <Navigate to={PATH.PROFILE}/>
    }
    return (
        <>
            <h2>Sign in</h2>
            
            <InputText value={email} onChangeText={setEmail} onEnterPress={clickLogin} placeholder="email"/>
            <InputText value={password} onChangeText={setPassword} onEnterPress={clickLogin} placeholder="password" visibilityPassword/>
            <Checkbox checked={rememberMe} onChecked={setRememberMe}> remember me </Checkbox>
            <Link to='/register'>
                Sign up</Link>
            <div>
                <Button>Login</Button>
                <p>Don't have an account?</p>
                <Link to='/register'>
                Sign up</Link>
            </div>
            <div>{loginError}</div>
        </>
    )
}