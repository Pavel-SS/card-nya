import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from '../Modal'
import { updatePacks } from "../../f-3-packs/p-2-bll/packsThunk";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";

export type EditPackModalType= {
    onClickClose: () => void
    open: boolean
    id: string
    name: string
}

export const EditPackModal: React.FC<EditPackModalType> = React.memo(({
    onClickClose,
    open,
    id,
    name
}) => {
    const dispatch = useDispatch()

    const [namePack, setNamePack] = useState<string>(name)
    
    const onClickEditPack = useCallback(()=>{
        dispatch(updatePacks(id, namePack, name))
        onClickCleanState()
    },[dispatch, onClickClose, id, namePack, name])
    
    const onClickCleanState = () => {
        onClickClose()
        setNamePack(name)
    }
    return (
        <Modal onClickClose={onClickCleanState} open={open}>
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