import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { delCard } from "../../f-4-cards/c-2-bll/cardsThunk";
import { Modal } from "../Modal";

export type DelCardModalType = {
    onClickClose: () => void
    open: boolean
    id: string
}

export const DelCardModal: React.FC<DelCardModalType> = React.memo(({
    onClickClose,
    open,
    id,
}) => {
    const dispatch = useDispatch()
    
    const onClickDelCard = useCallback(()=>{
        dispatch(delCard(id))
        onClickClose()
    }, [dispatch, onClickClose, id])

    return (
        <Modal onClickClose={onClickClose} open={open}>
            <p>Do you really want to remove card?</p>
            <div>
                <Button onClick={onClickClose}>Cancel</Button>
                <Button onClick={onClickDelCard}>Delete</Button>
            </div>
        </Modal>
    )
})