import { AxiosResponse } from 'axios';
import { instance } from '../../../s-1-main/m-3-dal/instace';

export const profileAPI = {
    me() {
        return instance.post<any, AxiosResponse<UserType>, {}>('auth/me',{})
    },
    update(userName: string, avatar: string) {
        return instance.put<any, AxiosResponse<UpdateType>, {userName:string, avatar?:string}>('auth/me', {userName})
    }
}

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

type UpdateType = {
    userUpdate: UserType
}