import { AxiosResponse } from 'axios';
import { instance } from "../../../../s-1-main/m-3-dal/instace"

export type LoginType = {
    email:string,
    password: string,
    rememberMe: boolean
}
type LogoutType = {
    info: string
    error?: string
}

//перенести в другую папку
export type UserType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export const loginAPI = {
    login(login: LoginType){
        return instance.post<any, AxiosResponse<UserType>, LoginType>('auth/login', login)
            .then(res => res.data)
    },
    logout(){
        return instance.delete<any, AxiosResponse<LogoutType>>('auth/login')
    },
}