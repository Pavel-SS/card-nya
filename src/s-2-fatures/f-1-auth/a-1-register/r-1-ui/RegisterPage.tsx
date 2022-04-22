
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
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';


//валидация панели регистрации
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
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .trim()
        .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf(
                [yup.ref('password')],
                'Both password need to be the same'
            )
        })
        .required('Confirm Password Required'),       
});

type State = {
        email: string;
        password: string;
        confirmPassword: string;
        showPassword: boolean;
}

export const Registration = React.memo(()=>{
    const dispatch = useDispatch()
    const history = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            confirmPassword:'',
            showPassword: false
        },
        validationSchema: validationSchema,
        onSubmit:(value) => {
            // dispatch(signUp(value.email, value.password, value.confirmPassword))
        }
    })

    const [values, setValues] = React.useState < State > ({
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent < HTMLInputElement > ) => {
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent < HTMLButtonElement > ) => {
        event.preventDefault();
    };
     
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>

                    <h1>Sign Up</h1>

                    <TextField  id="email" name="email" label="Email" value={formik.values.email}
                        onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />

                    <TextField  id="password" name="password" label="Password" type="password"
                        value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password &&
                        Boolean(formik.errors.password)} helperText={formik.touched.password &&
                        formik.errors.password} />

                    <TextField  id="confirmPassword" name="confirmPassword" label="Confirm Password"
                        type="password" value={formik.values.confirmPassword} onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input 
                            id="standard-adornment-password" 
                            type={values.showPassword ? 'text' : 'password' }
                            value={formik.values.password} 
                            onChange={handleChange('password')} 
                            endAdornment={ <InputAdornment position="end">
                            <IconButton 
                                aria-label="toggle password visibility" 
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div>
                        <Button variant="outlined" type="reset">
                            Cancel
                        </Button>
                        <Button color="primary" variant="contained" type="submit">
                            Registratio
                        </Button>
                    </div>
                </Form>
            </FormikProvider>
        </>
    )
})