import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { addCards } from "../../f-4-cards/c-2-bll/cardsThunk";
import { Modal, ModalType } from "../Modal";

type AddCardModalType = ModalType & {
    id: string
} 
export const AddCardModal: React.FC<AddCardModalType> = React.memo(({
    onClickModalWindow,
    open,
    id
})=>{
    
    const dispatch = useDispatch()

    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const onClickAddCard = useCallback(() => {
        dispatch(addCards(id, question, answer))
        onClickCleanState()
    }, [dispatch, onClickModalWindow, question, answer])

    const onClickCleanState = () => {
        onClickModalWindow()
        setQuestion('')
        setAnswer('')
    }

    return (
        <Modal onClickModalWindow={onClickCleanState} open={open}>
            <div>Add new card</div>
            <InputText
                value = {question}
                placeholder = {'Enter card question'}
                onChangeText = {setQuestion}
            />
            <InputText
                value = {answer}
                placeholder = {'Enter card answer'}
                onChangeText = {setAnswer}
            />
            <div>
                <Button onClick={onClickCleanState}>Cancel</Button>
                <Button onClick={onClickAddCard}>Save</Button>
            </div>

        </Modal>
    )
})