import React from "react"
import { Navigate } from "react-router-dom"
import { PATH } from "../../s-1-main/m-1-ui/main/routes/path"
import { selectLoginLogged } from "../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../s-1-main/m-2-bll/store"

export const AuthNavigate: React.FC = ({children}) => {
    const logIn = useAppSelector(selectLoginLogged)
    if (!logIn){ return <Navigate to={PATH.LOGIN}/> }
    return <>{children}</>
}