import { instace } from './../../../../s-1-main/m-3-dal/instace';

export type RegistDataType = {
    error: string;
}

export const registrAPI = {
    signUp: async (email: string, password:string) => {
        const response = await instace.post<RegistDataType>("/auth/register",{email, password});
        return response.data;
    }
}