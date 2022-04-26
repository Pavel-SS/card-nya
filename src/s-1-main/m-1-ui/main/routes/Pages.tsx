import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
// import { Registration } from "../../../../s-2-fatures/f-1-auth/a-1-register/r-1-ui/Register";
import { RegistrationPage } from "../../../../s-2-fatures/f-1-auth/a-1-register/r-1-ui/RegisterPage";
import { Login } from "../../../../s-2-fatures/f-1-auth/a-2-login/l-1-ui/Login";
import { ForgotPassword } from "../../../../s-2-fatures/f-1-auth/a-3-forgot/f-1-ui/ForgotPassword";
import { SetNewPass } from "../../../../s-2-fatures/f-1-auth/a-4-SetNewPass.tsx/s-1-ui/SetNewPass";
import { CheckedPass } from "../../../../s-2-fatures/f-1-auth/a-5-check/c-1-ui/CheckedPass";


export const enum PATH {
    LOGIN = '/login/',
    REGISTER = '/register/',
    FORGOT = '/forgot/',
    SET_NEW_PASS = '/set-new-password/',
    CHECKED = '/checked-email/'
}

export type PagesType = {
    _id: number;
    title: string;
    page: ReactNode;
    path?: string;
    params?: string;
}

export const pages: PagesType[] = [
    {_id: 0, title: 'main', path:'/',  page:<Navigate to={PATH.LOGIN}/>},
    {_id: 1, title: 'register', path:PATH.REGISTER, page:<RegistrationPage/>},
    {_id: 2, title: 'login', path: PATH.LOGIN, page:<Login/> },
    {_id: 3, title: 'forgot', path: PATH.FORGOT, page:<ForgotPassword/> },
    {_id: 4, title: 'set new password', path: PATH.SET_NEW_PASS, page:<SetNewPass/> },
    {_id: 5, title: 'checked', path: PATH.CHECKED, page:<CheckedPass/> },
    
    {_id: 9999, title: "error404", page: <div>error404</div>}
]
