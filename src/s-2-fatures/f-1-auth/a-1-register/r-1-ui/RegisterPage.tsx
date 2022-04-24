import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootSateType } from "../../../../s-1-main/m-2-bll/store";
import { Registration } from "./Register";


export const RegistrationPage  = () => {
    const dispatch = useDispatch();
    const {success, error} = useSelector((store: AppRootSateType)=> store.register)
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    // if (redirect && success && !first) return
    return (
        <>
            <Registration/>
        </>
    )
}