import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "./path";
import { Login } from "../../../../s-2-features/f-1-auth/a-2-login/l-1-ui/Login";
import { RegistrationPage } from "../../../../s-2-features/f-1-auth/a-1-register/r-1-ui/RegisterPage";
import { ForgotPassword } from "../../../../s-2-features/f-1-auth/a-3-forgot/f-1-ui/ForgotPassword";
import { Profile } from "../../../../s-2-features/f-2-profile/p-1-ui/Profile";


export const RouteFunc = () => {
    return ( 
        <Routes>
            <Route path="/" element = {<Navigate to={PATH.PROFILE}/>}/> 
            <Route path={PATH.PROFILE} element = {<Profile/>}/> 
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTER} element={<RegistrationPage/>}/>
            {/* <Route path={PATH.FORGOT} element={<ForgotPassword/>}/>
            <Route path={PATH.SET_NEW_PASS}/>
            <Route />
            <Route />
            <Route /> */}
        </Routes>
    )
}