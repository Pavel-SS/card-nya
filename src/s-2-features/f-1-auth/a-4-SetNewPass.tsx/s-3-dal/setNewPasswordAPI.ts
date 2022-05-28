import { AxiosResponse } from 'axios';
import { instance } from "../../../../s-1-main/m-3-dal/instace"
import { ResponseType } from '../../a-1-register/r-3-dal/registerAPI';

export type SetNewPasswordDataType = {
    newPassword: string
    confirmNewPassword: string
    exchangePassword: string
}

export const setNewPasswordAPI = {
    changePassword(pass: Omit<SetNewPasswordDataType, 'confirmNewPassword'>){
        return instance.post<any, AxiosResponse<ResponseType>, 
        Omit<SetNewPasswordDataType, 'confirmNewPassword'>>('auth/set-new-password', pass).then(res => res.data)
    }
}