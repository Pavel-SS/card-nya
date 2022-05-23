import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText"

type RecoveryPropsType = {
    email: string
    setEmail: (value: string) => void
    toSendInstructions: () => void
    isLoading: boolean
    error: string
    check: boolean
}

export const ForgotPassword:React.FC<RecoveryPropsType> = React.memo(({
                                  setEmail,
                                  email,
                                  toSendInstructions,
                                  isLoading,
                                  error,
                                  check
}) => {
    return (
        check ?
            <div>
                <div>Check Email</div>
                <span>We've sent an Email with instructions to {email}</span>
            </div>:
            <div>
                <div>Forgot your password?</div>
                <span>Email</span>
                <div>
                    <InputText value={email} onChangeText={setEmail} onEnterPress={toSendInstructions} />
                </div>
                <span>Enter your email address and we will send you further instructions</span>
                <div>
                    <Button disabled={isLoading} onClick={toSendInstructions}>
                        Send instructions
                    </Button>
                </div>
                <span>Did you remember your password?</span>
                <div>{error}</div>
                <div>
                    <Link to="/login">
                    Try logging in
                    </Link>
                </div>
            </div>
    )
})