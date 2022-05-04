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
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";



const validationSchema = yup.object({
    email: yup
        .string()
        .trim()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .min(8,'Must contain 8 characters')
        .matches( 
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            "One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required('Password is required')    
});

export const Login = React.memo(() => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema: validationSchema,
        onSubmit:(value) => {
            // dispatch(signInThunk(value.email, value.password))
        }
    })

    const [values, setValues] = React.useState<boolean> (false)
    
    const handleClickShowPassword = () => {setValues(!values);};

    const handleMouseDownPassword = (event: React.MouseEvent < HTMLButtonElement > ) => {
        event.preventDefault();
    };

    return (
        <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className={s.auth}>

                    <h1>Sign In</h1>
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
                    <FormControl sx={{ m: 1.5, width: '35ch', height: '50px' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input 
                            id="password" 
                            type={values ? 'text' : 'password' }
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            error={formik.touched.password && Boolean(formik.errors.password)} 
                            endAdornment={ 
                                <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" 
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}>
                                                {values ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id="password">{
                            formik.touched.password && formik.errors.password}
                        </FormHelperText>
                    </FormControl>
                    <Link className={s.auth__link_forgot} href={PATH.FORGOT} underline="none" sx={{width:"40ch", fontSize:"14px"}} align="right">
                         Forgot Password 
                    </Link>
                    <div className={s.auth__btn}>
                        <Button color="primary" variant="contained" type="submit">
                            Login
                        </Button>
                    </div>
                    <p className={s.auth__p}>
                        Don’t have an account?
                    </p>
                    <Link className={s.auth__link} href={PATH.LOGIN} underline="none" sx={{fontWeight:"800"}} variant="h6">
                        Sign Up
                    </Link>
                </Form>
            </FormikProvider>
    )
})