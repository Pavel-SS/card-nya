import { instace } from './../../../../s-1-main/m-3-dal/instace';

export type RegisterDataType = {
    error?: string;
}

export const registrationAPI = {
    signUp: async (email: string, password:string) => {
        const response = await instace.post<RegisterDataType>("/auth/register",{email, password});
        return response.data;
    }
}