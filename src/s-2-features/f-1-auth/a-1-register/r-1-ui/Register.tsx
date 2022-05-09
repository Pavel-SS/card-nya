
import React from "react";
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText";
import  { NavigateFunction } from 'react-router-dom';

import s from "../../a-8-style/authentication.module.scss"

type RegisterPropsType = {
    signUp:()=>void
    email:string
    password: string
    confirmPassword: string
    setEmail: (value:string)=> void
    setPassword: (value:string)=> void
    setConfirmPassword: (value:string) => void
    error:string
    isLoading: boolean
    navigate: NavigateFunction
}
export const Registration:React.FC<RegisterPropsType>= React.memo(({
    signUp,
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    error,
    isLoading,
    navigate
})=>{

    return (
        <>
            <h2>Sign up</h2>

            <InputText value={email} onChangeText={setEmail} onEnterPress = {signUp} placeholder='email'/>
            <InputText value={password} onChangeText={setPassword} onEnterPress = {signUp} placeholder='password' visibilityPassword />
            <InputText  value={confirmPassword} onChangeText={setConfirmPassword} onEnterPress = {signUp} placeholder='confirm password' visibilityPassword />
            <div>
                <Button disabled={isLoading} onClick={()=>navigate('/login')}>Cancel</Button>
                <Button disabled={isLoading} onClick={signUp}>Register</Button>
            </div>
            <div className={s.error}>error {error}</div>
        </>
    )
})