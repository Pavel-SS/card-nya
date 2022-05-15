import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { delPacks } from "../../f-3-packs/p-2-bll/packsThunk";
import { Modal, ModalType } from "../Modal";


export type DelPackModalType = ModalType & {
    id: string
    name: string
}

export const DelPackModal: React.FC<DelPackModalType> = React.memo(({
    onClickModalWindow,
    open,
    id,
    name
}) => {
    const dispatch = useDispatch()

    const onClickDelPack = useCallback(()=>{
        dispatch(delPacks(id, name))
        onClickModalWindow()
    },[dispatch, onClickModalWindow, id, name])
    return (
        <Modal onClickModalWindow={onClickModalWindow} open={open}>
            <p>Do you really want to remove pack '{name}'?</p>
            <p>All cards will be excluded from this course.</p>
            <div>
                <Button onClick={onClickModalWindow}>Cancel</Button>
                <Button onClick={onClickDelPack}>Delete</Button>
            </div>
        </Modal>
    )
})