import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { Checkbox } from "../../../s-0-common/c-1-ui/Checkbox/Checkbox";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { addPacks } from "../../f-3-packs/p-2-bll/packsThunk";
import { Modal, ModalType } from "../Modal"


export const AddPackModal: React.FC<ModalType> = React.memo(({onClickModalWindow,open}) => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState<string>(''),
          [privatePack, setPrivatePack] = useState<boolean>(false);
    
    const onClickAddPack = useCallback(()=>{
        dispatch(addPacks(name, privatePack))
        onClickCleanState()
    }, [dispatch, onClickModalWindow, name, privatePack])

    const onClickCleanState = () => {
        onClickModalWindow()
        setName('')
        setPrivatePack(false)
    }

    return (
        <Modal onClickModalWindow={onClickCleanState} open={open}>
            <InputText value={name} placeholder={'Enter name'}/>
            <Checkbox checked={privatePack} onChecked={setPrivatePack}>
                Make private
            </Checkbox>
            <div>
                <Button onClick={onClickCleanState}>Cancel</Button>
                <Button onClick={onClickAddPack}>Save</Button>
            </div>
        </Modal>
    )
})