import { AxiosResponse } from 'axios';
import { instance } from '../../../s-1-main/m-3-dal/instace';

export const profileAPI = {
    me() {
        return instance.post<any, AxiosResponse<ResponseType>, {}>('auth/me', {})
    },
    update(name: string, avatar: string) {
        return instance.put<any, AxiosResponse<UpdateType>, {name: string, avatar?: string}>('auth/me', {name})
    }
}
type ResponseType = UserType

type UpdateType = {
    userUpdate: UserType
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
