
import React from "react";
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText";
import  { NavigateFunction } from 'react-router-dom';

import gnel from "../../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../../s-1-main/app/style/text.module.scss"

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
    navigate,

})=>{

    return (

            <div className={gnel.block__auth_box}>
                <h2 className={`${gnel.item_title} ${text.fs27_700}`}>Sign up</h2>
                <InputText value={email} onChangeText={setEmail} onEnterPress={signUp} placeholder='email' />
                <InputText value={password} onChangeText={setPassword} onEnterPress={signUp} placeholder='password'
                    visibilityPassword />
                <InputText value={confirmPassword} onChangeText={setConfirmPassword} onEnterPress={signUp}
                    placeholder='confirm password' visibilityPassword />
                <div className={gnel.btns}>
                    <Button className={`${gnel.btn} ${gnel.btn_sml} ${text.fs14_400}`} disabled={isLoading}
                        onClick={()=>navigate('/login')}>Cancel</Button>
                    <Button className={`${gnel.btn} ${gnel.btn_bg} ${text.fs14_400}`} disabled={isLoading}
                        onClick={signUp}>Register</Button>
                </div>   
                <div className={gnel.error}>{error}</div>
            </div>
    )
})