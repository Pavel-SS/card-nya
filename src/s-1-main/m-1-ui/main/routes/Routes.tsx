import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "./path";
// import { Navigate } from "react-router-dom";

import { Login } from "../../../../s-2-fatures/f-1-auth/a-2-login/l-1-ui/Login";
import { RegistrationPage } from "../../../../s-2-fatures/f-1-auth/a-1-register/r-1-ui/RegisterPage";
import { ForgotPassword } from "../../../../s-2-fatures/f-1-auth/a-3-forgot/f-1-ui/ForgotPassword";
// import { ForgotPassword } from "../../../../s-2-fatures/f-1-auth/a-3-forgot/f-1-ui/ForgotPassword";
// import { SetNewPass } from "../../../../s-2-fatures/f-1-auth/a-4-SetNewPass.tsx/s-1-ui/SetNewPass";
// import { CheckedPass } from "../../../../s-2-fatures/f-1-auth/a-5-check/c-1-ui/CheckedPass";

export const RouteFunc = () => {
    return ( 
        <Routes>
            <Route path="/" element = {<Navigate to={PATH.LOGIN}/>}/> 
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTER} element={<RegistrationPage/>}/>
            <Route path={PATH.FORGOT} element={<ForgotPassword/>}/>
            <Route path={PATH.SET_NEW_PASS}/>
            <Route />
            <Route />
            <Route />
        </Routes>
    )
}