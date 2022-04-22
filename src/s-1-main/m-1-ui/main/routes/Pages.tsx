import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Registration } from "../../../../s-2-fatures/f-1-auth/a-1-register/r-1-ui/RegisterPage";


export const enum PATH {
    REGISTER = '/register'
}

export type PagesType = {
    _id: number;
    title: string;
    page: ReactNode;
    path?: string;
}

export const pages: PagesType[] = [
    {_id: 0, title: 'main',path:'/', page: <Navigate to={PATH.REGISTER}/>},
    {_id: 1, title: 'register', path: PATH.REGISTER, page:<Registration/>}
]
