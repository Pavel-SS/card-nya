import React from "react";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form, FormikProvider, useFormik } from 'formik';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText  from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";

import s from '../../a-8-style/authentication.module.scss'
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/Pages";
import { Typography } from "@mui/material";

const validationSchema = yup.object({
    email: yup
        .string()
        .trim()
        .email('Enter a valid email')
        .required('Email is required')
});



export const ForgotPassword = React.memo(() => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
        },
        validationSchema: validationSchema,
        onSubmit:(value) => {
            // dispatch(signInThunk(value.email, value.password))
        }
    })

    return (
        <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className={s.auth}>

                    <h1>Forgot your password?</h1>
                    <FormControl sx={{ m: 1.5, width: '35ch', height: '50px' }} variant="standard">
                        <InputLabel>Email</InputLabel>
                        <Input 
                            id="email" 
                            value={formik.values.email} 
                            onChange={formik.handleChange} 
                            error={formik.touched.email && Boolean(formik.errors.email)} 
                        />
                        <FormHelperText id="email">{
                            formik.touched.email && formik.errors.email}
                        </FormHelperText>
                    </FormControl>
                    <p className={s.auth__p}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <div className={s.auth__btn}>
                        <Button className={s.btn_lg} color="primary" variant="contained" type="submit">
                            Send Instructions
                        </Button>
                    </div>
                    <p className={s.auth__p}>
                        Did you remember your password?
                    </p>
                    <Link className={s.auth__link} href={PATH.LOGIN} underline="none" sx={{fontWeight:"800"}} variant="h6">
                        Try logging in
                    </Link>
                </Form>
            </FormikProvider>
    )
})