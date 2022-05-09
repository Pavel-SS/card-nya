import React from "react";
// import { Form, FormikProvider } from 'formik';
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import MarkEmailReadSharpIcon from '@mui/icons-material/MarkEmailReadSharp';
import s from '../../a-8-style/authentication.module.scss'


export const CheckedPass = ()=>{
    return (
    <div className={`${s.auth} ${s.auth_small}`}>
        <h1>Create new password</h1>
        <div className={s.auth__block_icons}>
            <MarkEmailReadSharpIcon className={s.icon}  sx={{ fontSize: 80 }}/>
        </div>

        <p className={s.auth__p}>
            Create new password and we will send you further instructions to email
        </p>
    </div>
    )
}