import { UserType } from '../../../f-2-profile/p-3-api/profileAPI';
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



export const loginAPI = {
    login(login: LoginType){
        return instance.post<any, AxiosResponse<UserType>, LoginType>('auth/login', login)
            .then(res => res.data)
    },
    logout(){
        return instance.delete<any, AxiosResponse<LogoutType>>('auth/login')
    },
}