import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText";
import { addCards } from "../../f-4-cards/c-2-bll/cardsThunk";
import { Modal } from "../Modal";

type AddCardModalType = {
    onClickClose: () => void
    open: boolean
    cardsPackID: string
} 
export const AddCardModal: React.FC<AddCardModalType> = React.memo(({
    onClickClose,
    open,
    cardsPackID
})=>{
    
    const dispatch = useDispatch()

    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const onClickAddCard = useCallback(() => {
        dispatch(addCards(cardsPackID, question, answer))
        onClickCleanState()
    }, [dispatch, onClickClose, question, answer])

    const onClickCleanState = () => {
        onClickClose()
        setQuestion('')
        setAnswer('')
    }

    return (
        <Modal onClickClose={onClickCleanState} open={open}>
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