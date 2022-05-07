
// import React from "react";
// import * as yup from 'yup';
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { Form, FormikProvider, useFormik } from 'formik';

// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';
// import InputLabel from '@mui/material/InputLabel';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText  from "@mui/material/FormHelperText";

// import { signUpThunk } from "../r-2-bll/registerThunk";

// import s from '../../a-8-style/authentication.module.scss'
// import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";


// //валидация панели регистрации
// const validationSchema = yup.object({
//     email: yup
//         .string()
//         .trim()
//         .email('Enter a valid email')
//         .required('Email is required'),
//     password: yup
//         .string()
//         .trim()
//         .min(8,'Must contain 8 characters')
//         .matches( 
//             /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
//             "One Uppercase, One Lowercase, One Number and one special case Character"
//         )
//         .required('Password is required'),
//     confirmPassword: yup
//         .string()
//         .trim()
//         .when('password', {
//             is: (val: string) => (val && val.length > 0 ? true : false),
//             then: yup.string().oneOf(
//                 [yup.ref('password')],
//                 'Both password need to be the same'
//             )
//         })
//         .required('Confirm Password Required'),       
// });


// export const Registration = React.memo(()=>{
//     const dispatch = useDispatch()
//     const history = useNavigate()
//     const formik = useFormik({
//         initialValues:{
//             email:'',
//             password:'',
//             confirmPassword:'',
//             showPassword: false
//         },
//         validationSchema: validationSchema,
//         onSubmit:(value) => {
//             dispatch(signUpThunk(value.email, value.password, value.confirmPassword))
//             history(PATH.LOGIN)
//         },
//     })

//     const [values, setValues] = React.useState<boolean>(
//         false
//     );

//     const handleClickShowPassword = () => {
//         setValues(!values);
//     };

//     const handleMouseDownPassword = (event: React.MouseEvent < HTMLButtonElement > ) => {
//         event.preventDefault();
//     };
     
//     return (
//             <FormikProvider value={formik}>
//                 <Form onSubmit={formik.handleSubmit} className={s.auth}>

//                     <h1>Sign Up</h1>
//                     <FormControl sx={{ m: 1.5, width: '35ch', height: '50px' }} variant="standard">
//                         <InputLabel>Email</InputLabel>
//                         <Input 
//                             id="email" 
//                             value={formik.values.email} 
//                             onChange={formik.handleChange} 
//                             error={formik.touched.email && Boolean(formik.errors.email)} 
//                         />
//                         <FormHelperText id="email">{
//                             formik.touched.email && formik.errors.email}
//                         </FormHelperText>
//                     </FormControl>
//                     <FormControl sx={{ m: 1.5, width: '35ch', height: '50px' }} variant="standard">
//                         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//                         <Input 
//                             id="password" 
//                             type={values ? 'text' : 'password' }
//                             value={formik.values.password} 
//                             onChange={formik.handleChange} 
//                             error={formik.touched.password && Boolean(formik.errors.password)} 
//                             endAdornment={ 
//                                 <InputAdornment position="end">
//                                 <IconButton aria-label="toggle password visibility" 
//                                             onClick={handleClickShowPassword}
//                                             onMouseDown={handleMouseDownPassword}>
//                                                 {values ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                         <FormHelperText id="password">{
//                             formik.touched.password && formik.errors.password}
//                         </FormHelperText>
//                     </FormControl>
//                     <FormControl sx={{ m: 1.5, width: '35ch', height: '50px' }} variant="standard">
//                         <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
//                         <Input 
//                             id="confirmPassword" 
//                             type={values ? 'text' : 'password' }
//                             value={formik.values.confirmPassword} 
//                             onChange={formik.handleChange} 
//                             error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} 
//                             endAdornment={ 
//                                 <InputAdornment position="end">
//                                 <IconButton aria-label="toggle password visibility" 
//                                             onClick={handleClickShowPassword}
//                                             onMouseDown={handleMouseDownPassword}>
//                                                 {values ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                         <FormHelperText id="confirmPassword">
//                             {formik.touched.confirmPassword && formik.errors.confirmPassword}
//                         </FormHelperText>
//                     </FormControl>
//                     <div className={s.auth__btn}>
//                         <Button variant="outlined" type="reset">
//                             Cancel
//                         </Button>
//                         <Button color="primary" variant="contained" type="submit">
//                             Registratio
//                         </Button>
//                     </div>
//                 </Form>
//             </FormikProvider>
//     )
// })

import React from "react";
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText";
import {useNavigate, NavigateFunction} from 'react-router-dom';

type RegisterPropsType = {
    signUp?:()=>void
    email?:string
    password?: string
    confirmPassword?: string
    setEmail?: (value:string)=> void
    setPassword?: (value:string)=> void
    setConfirmPassword?: (value:string) => void
    error?:string
    isLoading: boolean
    navigate: NavigateFunction
}
export const Registration:React.FC<RegisterPropsType>= React.memo(({
    signUp,
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    error,
    isLoading,
    navigate
})=>{

    return (
        <>
            <h2>Sign up</h2>

            <InputText value={email} onChangeText={setEmail} onEnterPress = {signUp} placeholder='email'/>
            <InputText value={password} onChangeText={setPassword} onEnterPress = {signUp}placeholder='password' visibilityPassword />
            <InputText  value={confirmPassword} onChangeText={setConfirmPassword} onEnterPress = {signUp} placeholder='confirm password' visibilityPassword />
            <div>
                <Button disabled={isLoading} onClick={()=>navigate('/login')}>Cancel</Button>
                <Button disabled={isLoading}>Register</Button>
            </div>
        </>
    )
})