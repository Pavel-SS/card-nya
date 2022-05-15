import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { delCard } from "../../f-4-cards/c-2-bll/cardsThunk";
import { Modal, ModalType } from "../Modal";

export type DelCardModalType = ModalType & {
    id: string
}

export const DelCardModal: React.FC<DelCardModalType> = React.memo(({
    onClickModalWindow,
    open,
    id,
}) => {
    const dispatch = useDispatch()
    
    const onClickDelCard = useCallback(()=>{
        dispatch(delCard(id))
        onClickModalWindow()
    }, [dispatch, onClickModalWindow, id])

    return (
        <Modal onClickModalWindow={onClickModalWindow} open={open}>
            <p>Do you really want to remove card?</p>
            <div>
                <Button onClick={onClickModalWindow}>Cancel</Button>
                <Button onClick={onClickDelCard}>Delete</Button>
            </div>
        </Modal>
    )
})