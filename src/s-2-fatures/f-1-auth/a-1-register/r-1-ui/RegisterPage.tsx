
import React from "react";
import yup from 'yup';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from 'formik';
import { Button, TextField} from '@mui/material';

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
        .required('Confirm Password Required')
});


export const Registration = React.memo(()=>{
    const dispatch = useDispatch()
    const history = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: validationSchema,
        onSubmit:(value) => {
            // dispatch(signUp(value.email, value.password, value.confirmPassword))
        }
    }) 
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className={s.block_sing}>

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