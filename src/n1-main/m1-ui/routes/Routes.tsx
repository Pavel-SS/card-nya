import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { InsertNewPasswordPage } from '../../../n2-features/f0-test/Pages/InsertNewPasswordPage'
import { LoginPage } from '../../../n2-features/f0-test/Pages/LoginPage'
import { ProfilePage } from '../../../n2-features/f0-test/Pages/ProfilePage'
import { RecoverPasswordPage } from '../../../n2-features/f0-test/Pages/RecoverPasswordPage'
import { RegistrationPage } from '../../../n2-features/f0-test/Pages/RegistrationPage'



export const RoutesFunc= () => {
    return (
        <div>  
            <Routes>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/insert_password'} element={<InsertNewPasswordPage/>}/>
                <Route path={'/recover_password'} element={<RecoverPasswordPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                {/* <Route element={() => <Error404/>}/> */}
            </Routes>
        </div>
    )
}

