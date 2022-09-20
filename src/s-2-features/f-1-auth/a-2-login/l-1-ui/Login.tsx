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
import { Preloader } from "../../../../s-0-common/c-1-ui/Preloader/Preloader"

import gnel from "../../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../../s-1-main/app/style/text.module.scss"
import s from '../../../../s-1-main/app/App.module.scss'

export const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const loginLogged = useAppSelector(selectLoginLogged);
    const loginLoading = useAppSelector(selectLoginIsLoading);
    const loginError = useAppSelector(selectLoginError);

    useEffect(()=>{
       return () => {
           dispatch(loginActions.setError(''))
        }
    }, [dispatch])

    const clickLogin = useCallback(()=>{
        dispatch(loginThunk({email,password, rememberMe}))
    },[dispatch, email, password, rememberMe])

    if (loginLogged){
        return <Navigate to={PATH.PROFILE}/>
    }
    return (
        <div className={gnel.block__auth}>
            <div className={gnel.block__auth_box}>
                <h2 className={`${gnel.item_title} ${text.fs27_700}`}>Sign In</h2>
                <InputText value={email} onChangeText={setEmail} onEnterPress={clickLogin} placeholder="email" />
                <InputText value={password} onChangeText={setPassword} onEnterPress={clickLogin} placeholder="password"
                    visibilityPassword />
                <Checkbox checked={rememberMe} onChecked={setRememberMe}> remember me </Checkbox>
                <Link to='/forgot-password' className={`${gnel.link} ${gnel.link__forgot} ${text.fs14_400}`}>
                Forgot password</Link>
                <Button className={`${gnel.btn} ${gnel.btn_sml} ${text.fs14_400}`} onClick={clickLogin}>Login</Button>
                <p className={`${gnel.item_txt} ${text.fs12_700}`}>Don't have an account?</p>
                <Link to='/register' className={`${gnel.link} ${text.fs14_400}`}>
                Sign up</Link>
                <div>{loginError}</div>
            </div>
            {loginLoading && <div className={s.appProgress}><Preloader/></div>}
        </div>
    )
}