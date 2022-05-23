import { ResponseType } from './../../a-1-register/r-3-dal/registerAPI';
import { AxiosResponse } from 'axios';
import { instance } from "../../../../s-1-main/m-3-dal/instace"

export type RecoverDataType = {
    email:string,
    from: string,
    message:string
} 

export const forgotPasswordAPI = {
    instructionSend (email:string){
        return instance.post<any, AxiosResponse<ResponseType>,RecoverDataType>('auth/forgot', {
            email, from: '<santos_pav@mail.ru>',
            message: `<div> BRAINSTORM: This is a password recovery link: <a href='https://pavel-ss.github.io/card-nya/#/forgot-password/$token$'>link</a></div>`
        }).then(res => res.data)
    }
}