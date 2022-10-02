import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { Checkbox } from "../../../s-0-common/c-1-ui/Checkbox/Checkbox";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { addPacks } from "../../f-3-packs/p-2-bll/packsThunk";
import { Modal} from "../Modal"
import s from "./../../style/modalWindow.module.scss"

type AddPackModalType = {
    onClickClose: () => void
    open: boolean
}

export const AddPackModal: React.FC<AddPackModalType> = React.memo(({onClickClose, open}) => {
    
    const [name, setName] = useState<string>(''),
          [privatePack, setPrivatePack] = useState<boolean>(false);

    const dispatch = useDispatch();
    
    const onClickAddPack = useCallback(()=>{
        dispatch(addPacks(name, privatePack))
        onClickCleanState()
    }, [dispatch, onClickClose, name, privatePack])

    const onClickCleanState = () => {
        onClickClose()
        setName('')
        setPrivatePack(false)
    }

    return (
        <Modal onClickClose={onClickCleanState} open={open}>
            <InputText value={name} placeholder={'Enter name'} onChangeText={setName}/>
            <Checkbox checked={privatePack} onChecked={setPrivatePack}>
                Make private
            </Checkbox>
            <div className={s.modal_btns}>
                <Button onClick={onClickCleanState}>Cancel</Button>
                <Button onClick={onClickAddPack}>Save</Button>
            </div>
        </Modal>
    )
})