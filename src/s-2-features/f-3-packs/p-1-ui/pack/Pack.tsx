import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button";
import { PATH } from "../../../../s-1-main/m-1-ui/main/routes/path";
import { selectProfileUserID } from "../../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store";
import { getDataUpdate } from "../../../../utils/getDataUpdate";
import { cardsActions } from "../../../f-4-cards/c-2-bll/cardsActions";
import { DelPackModal } from "../../../f-5-modal_window/m-2-del_modal/DelPackModal";
import { EditPackModal } from "../../../f-5-modal_window/m-3-edit_modal/EditPackModal";
import { LearnPackModal } from "../../../f-5-modal_window/m-5-learn_modal/LearnPackModal";
import { learnCardsThunk } from "../../p-2-bll/learn/learnThunk";
import { PackType } from "../../p-3-api/packsAPI";

import s from "../tableStyle.module.scss"

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

    const [delPack, setDelPack] = useState<boolean>(false)
    const [editPack, setEditPack] = useState<boolean>(false)
    const [learnPack, setLearnPack] = useState<boolean>(false)

    const delPackOpen = useCallback(() => {
        setDelPack(true)
    }, [])
    const delPackClose = useCallback(() => {
        setDelPack(false)
    }, [])
    const editPackOpen = useCallback(() => {
        setEditPack(true)
    }, [])
    const editPackClose = useCallback(() => {
        setEditPack(false)
    }, [])
    const learnPackOpen = useCallback(() => {
        setLearnPack(true)
    }, [])
    const learnPackClose = useCallback(() => {
        setLearnPack(false)
    }, [])
    const startLearn = useCallback(() => {
        setLearnPack(true)
        dispatch(learnCardsThunk(pack._id))
    }, [])

    return (
        <tr className={s.table__body_tr}>
            <td onClick = {openCard}>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{packUpdate}</td>
            <td>{pack.user_name}</td>
            <td>
                <LearnPackModal name={pack.name} onClickLearnPack={learnPackOpen} 
                    onClickModalWindow={learnPackClose} open={learnPack}
                />
                <EditPackModal id={pack._id} name={pack.name} onClickModalWindow={editPackClose} open={editPack}/>
                <DelPackModal id={pack._id} name={pack.name} onClickModalWindow={delPackClose} open={delPack}/>
                {pack.cardsCount > 0 && 
                    <Button onClick={startLearn}>Learn</Button>
                }
                {pack.user_id === userID && <>
                    <Button onClick={editPackOpen}>Edit</Button>
                    <Button onClick={delPackOpen}>Del</Button>
                </>}
            </td>
        </tr>
    )
})