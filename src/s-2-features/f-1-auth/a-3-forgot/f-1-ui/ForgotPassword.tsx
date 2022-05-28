import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText"

import gnel from "../../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../../s-1-main/app/style/text.module.scss"

type ForgotPasswordPropsType = {
    email: string
    setEmail: (value: string) => void
    toSendInstructions: () => void
    isLoading: boolean
    error: string
    check: boolean
}

export const ForgotPassword:React.FC<ForgotPasswordPropsType> = React.memo(({
                                  setEmail,
                                  email,
                                  toSendInstructions,
                                  isLoading,
                                  error,
                                  check
}) => {
    return (
        check ?
            <div className={gnel.block__auth_box}>
                <div>Check Email</div>
                <span>We've sent an Email with instructions to {email}</span>
            </div>:
            <div className={gnel.block__auth_box}>
                <h2 className={`${gnel.item_title} ${text.fs27_700}`}>
                    Forgot your password?
                </h2>
                <InputText 
                    value={email} 
                    onChangeText={setEmail} 
                    onEnterPress={toSendInstructions}
                    placeholder='email'
                />
                <span className={`${gnel.inform_txt} ${text.fs14__inform_400}`}>
                    Enter your email address and we will send you further
                    instructions
                </span>
                <Button className={`${gnel.btn} ${gnel.btn_bg} ${text.fs14_400}`} 
                    disabled={isLoading}
                    onClick={toSendInstructions}
                >
                    Send instructions
                </Button>
                <span className={`${gnel.inform_txt} ${text.fs14__inform_400}`}>
                    Did you remember your password?
                </span>
                <div>{error}</div>
                    <Link to="/login" className={`${gnel.link} ${text.fs14_400}`}>
                    Try logging in
                    </Link>
            </div>
    )
})