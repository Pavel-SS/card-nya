import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalType } from '../Modal'
import { updatePacks } from "../../f-3-packs/p-2-bll/packsThunk";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";

export type EditPackModalType= ModalType & {
    id: string
    name: string
}

export const EditPackModal: React.FC<EditPackModalType> = React.memo(({
    onClickModalWindow,
    open,
    id,
    name
}) => {
    const dispatch = useDispatch()

    const [namePack, setNamePack] = useState<string>(name)
    
    const onClickEditPack = useCallback(()=>{
        dispatch(updatePacks(id,namePack,name))
        onClickCleanState()
    },[dispatch, onClickModalWindow, id, namePack, name])
    
    const onClickCleanState = () => {
        onClickModalWindow()
        setNamePack(name)
    }
    return (
        <Modal onClickModalWindow={ onClickCleanState} open={open}>
            <div>Pack name</div>
            <InputText value ={namePack} 
                placeholder={'Enter pack name'}
                onChangeText={setNamePack}
            />
            <div>
                <Button onClick={onClickCleanState}>Cancel</Button>
                <Button onClick={onClickEditPack}>Save</Button>
            </div>
        </Modal>
    )
})