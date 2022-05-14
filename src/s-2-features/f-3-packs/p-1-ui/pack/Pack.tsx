import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProfileUserID } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { getDataUpdate } from "../../../../utils/getDataUpdate";
import { PackType } from "../../p-3-api/packsAPI";

export type PackPropsType = {
    pack: PackType
}


export const Pack: React.FC<PackPropsType> = React.memo(({pack}) => {
    const dispatch = useDispatch(),
          navigate = useNavigate();
    
    const userID = useAppSelector(selectProfileUserID)
    const packUpdate = getDataUpdate(pack.updated)

    // const openCard = () => {
    //     dispatch(car)
    // }

    return (
        <>
        </>
    )
})