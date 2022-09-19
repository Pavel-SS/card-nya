import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "./path";
import { Login } from "../../../../s-2-features/f-1-auth/a-2-login/l-1-ui/Login";
import { RegistrationPage } from "../../../../s-2-features/f-1-auth/a-1-register/r-1-ui/RegisterPage";
import { ForgotPasswordPage } from "../../../../s-2-features/f-1-auth/a-3-forgot/f-1-ui/ForgotPasswordPage";
import { Profile } from "../../../../s-2-features/f-2-profile/p-1-ui/Profile";
import { AuthNavigate } from "../../../../utils/hoc/AuthVerific";
import { Packs } from "../../../../s-2-features/f-3-packs/p-1-ui/Packs";
import { CardsPage } from "../../../../s-2-features/f-4-cards/c-1-ui/CardsPage";
import { SetNewPasswordPage } from "../../../../s-2-features/f-1-auth/a-4-SetNewPass.tsx/s-1-ui/SetNewPasswordPage";


export const RouteFunc = () => {
    return ( 
        <Routes>
            <Route path="/" element = {<Navigate to={PATH.PROFILE}/>}/> 
            <Route path={PATH.PROFILE} element = {
                <AuthNavigate>
                    <Profile/>
                </AuthNavigate>
            }/> 
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTER} element={<RegistrationPage/>}/>
            <Route path={PATH.PACKS} element={
                <AuthNavigate>
                    <Packs/>
                </AuthNavigate>}
            />
            <Route path={PATH.FORGOT} element={<ForgotPasswordPage/>}/>
            <Route path={PATH.SET_NEW_PASS} element={<SetNewPasswordPage/>}/>
            <Route path={`${PATH.CARDS}/:packUserID`} element={
                <AuthNavigate>
                    <CardsPage/>
                </AuthNavigate>}
            />
        </Routes>
    )
}