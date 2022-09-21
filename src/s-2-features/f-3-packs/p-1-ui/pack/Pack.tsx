import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";
import { selectProfileUserID } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { getDataUpdate } from "../../../../utils/getDataUpdate";
import { cardsActions } from "../../../f-4-cards/c-2-bll/cardsActions";
import { PackType } from "../../p-3-api/packsAPI";

import s from "./../../../style/tableStyle.module.scss"
import { PackActionPanel } from "./PackActionPanel";

export type PackPropsType = {
    pack: PackType
}


export const Pack: React.FC<PackPropsType> = React.memo(({ pack }) => {
    const dispatch = useDispatch(),
          navigate = useNavigate();
    
    const userID = useAppSelector(selectProfileUserID)
    const packUpdate = getDataUpdate(pack.updated)

    const openCard = () => {
        dispatch(cardsActions.setQuestion(''))
        dispatch(cardsActions.setAnswer(''))
        dispatch(cardsActions.setCardsName(pack.name))
        dispatch(cardsActions.setCardsID(pack._id))
        navigate(`${PATH.CARDS}/${pack.user_id}`)
    }

    return (
        <tr className={s.table__body_tr}>
            <td onClick = {openCard} style={{cursor: 'pointer'}}>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{packUpdate}</td>
            <td>{pack.user_name}</td>
            <td>
                <PackActionPanel 
                    myPack={ pack.user_id === userID } 
                    pack={ pack }
                />
            </td>
        </tr>
    )
})