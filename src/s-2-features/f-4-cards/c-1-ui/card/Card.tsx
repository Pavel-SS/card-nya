import React, { useCallback, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"
import { selectProfileUserID } from "../../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store"
import { getDataUpdate } from "../../../../utils/getDataUpdate"
import { DelCardModal } from "../../../f-5-modal_window/m-2-del_modal/DelCardModal"
import { EditCardModal } from "../../../f-5-modal_window/m-3-edit_modal/EditCardModal"
import { CardType } from "../../c-3-api/cardsAPI"

import s from "./../../../style/tableStyle.module.scss";

export type CardPropsType = {
    card: CardType
}

export const Card: React.FC<CardPropsType> = React.memo(({card})=>{
    const [delCard, setDelCard] = useState<boolean>(false)
    const [editCard, setEditCard] = useState<boolean>(false)

    const userID = useAppSelector(selectProfileUserID)

    const {packUserID} = useParams<'packUserID'>()

    const delCardOpen = useCallback(()=>{
        setDelCard(true)
    },[])
    
    const delCardClose = useCallback(()=>{
        setDelCard(false)
    },[])

    const editCardOpen = useCallback(()=>{
        setEditCard(true)
    },[])

    const editCardClose = useCallback(()=>{
        setEditCard(false)
    },[])
    
    const dataUpdate = getDataUpdate(card.updated)

    return (
        <tr className={s.table__body_card_tr}>
            <DelCardModal
                onClickClose={delCardClose}
                open = {delCard}
                id={card._id}
            />
            <EditCardModal
                onClickClose={editCardClose}
                open={editCard}
                id={card._id}
                question={card.question}
                answer={card.answer}
            />
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{dataUpdate}</td>
            <td>{card.grade.toFixed(2)}</td>
            {userID === packUserID && <td>
                    <Button onClick={editCardOpen}>Edit</Button>    
                    <Button onClick={delCardOpen}>Del</Button>    
                </td>
            }
        </tr>
    )
})