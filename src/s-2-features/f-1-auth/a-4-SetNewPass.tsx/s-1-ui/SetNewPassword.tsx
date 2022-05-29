import React from "react";
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText";

import gnel from "../../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../../s-1-main/app/style/text.module.scss"

type SetNewPassPropsType =  {
    newPassword: string
    confirmNewPassword: string
    setNewPassword: (value: string) => void
    setConfirmNewPassword: (value: string) => void
    changePassword: () => void
    isLoading: boolean
    error: string
}

export const SetNewPassword: React.FC<SetNewPassPropsType> = React.memo(({
    newPassword,
    confirmNewPassword,
    setNewPassword,
    setConfirmNewPassword,
    changePassword,
    isLoading,
    error
}) =>{
    return (
        <div className={gnel.block__auth_box}>
            <h2 className={`${gnel.item_title} ${text.fs27_700}`}>
                Create new password
            </h2>
            <InputText 
                value={newPassword} 
                onChangeText={setNewPassword} 
                onEnterPress={changePassword} 
                placeholder='new password'
                visibilityPassword 
            />
            <InputText 
                value={confirmNewPassword} 
                onChangeText={setConfirmNewPassword} 
                onEnterPress={changePassword}
                placeholder='confirm new password' 
                visibilityPassword 
            />
            <p className={`${gnel.inform_txt} ${text.fs14__inform_400}`}>
                Create new password and we will send you further instructions to email
            </p>
            <Button 
                className={`${gnel.btn} ${text.fs14_400}`} 
                disabled={isLoading}
                onClick={changePassword}>
                    Confirm password
            </Button>
            <div className={gnel.error}>{error}</div>
        </div>
    )
})