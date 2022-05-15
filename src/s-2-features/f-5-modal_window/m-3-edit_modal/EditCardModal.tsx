import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button"
import { InputText } from "../../../s-0-common/c-1-ui/InputText/InputText"
import { updateCard } from "../../f-4-cards/c-2-bll/cardsThunk"
import { Modal, ModalType } from "../Modal"

export type EditCardModalType = ModalType & {
    id: string
    question: string
    answer: string
}

export const EditCardModal: React.FC<EditCardModalType> = React.memo(({
    onClickModalWindow,
    open,
    id,
    question,
    answer
})=>{
    const dispatch = useDispatch()

    const [createQuestion, setCreateQuestion] = useState<string>(question)
    const [createAnswer, setCreateAnswer] = useState<string>(answer)

    const onClickEditCard = useCallback(()=>{
        dispatch(updateCard(id, createQuestion, createAnswer))
        onClickCleanState()
    },[dispatch, onClickModalWindow, id, createQuestion, createAnswer])

    const onClickCleanState = () => {
        onClickModalWindow()
        setCreateQuestion(question)
        setCreateAnswer(answer)
    }
    return (
        <Modal onClickModalWindow={onClickCleanState} open={open}>
            <p>Card info</p>
            <InputText 
                value={createQuestion} 
                placeholder={'Enter question'} 
                onChangeText={setCreateQuestion}
            />
            <InputText
                value={createAnswer}
                placeholder={'Enter answer'}
                onChangeText={setCreateAnswer}
            />
            <div>
                <Button onClick={onClickCleanState}>Cancel</Button>
                <Button onClick={onClickEditCard}>Save</Button>
            </div>
        </Modal>
    )
})

