
import { AxiosResponse } from 'axios';
import { instance } from '../../../../s-1-main/m-3-dal/instace';

export type ResponseType = {
    error?: string;
}

export type RegisterDataType = {
    email: string,
    password: string,
    confirmPassword: string
}

export const registrationAPI = {
    signUp(data: Omit<RegisterDataType,'confirmPassword'>){
        return instance.post<ResponseType, AxiosResponse<ResponseType>, Omit<RegisterDataType,'confirmPassword'>>("auth/register", data).then(r=>r.data)
    }
}