import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { selectAppIsLoading, selectLearnRandomeCards } from "../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../s-1-main/m-2-bll/store";
import { learnActions } from "../../../s-1-main/m-2-bll/learn/learnAction";
import { CardType } from "../../f-4-cards/c-3-api/cardsAPI";
import { Modal, ModalType } from "../Modal";

export type LearnPackModalType = ModalType & {
    onClickLearnPack: () => void
    name: string
}

export const LearnPackModal: React.FC<LearnPackModalType> = React.memo(({
    onClickModalWindow,
    onClickLearnPack,
    open,
    name
}) => {
    const dispatch = useDispatch()

    const [answerOpen, setAnswerOpen] = useState<boolean>(false)

    const randomCard = useAppSelector(selectLearnRandomeCards)
    const loading = useAppSelector(selectAppIsLoading)

    const setAnswer = useCallback(()=>{
        onClickModalWindow()
        setAnswerOpen(true)
    }, [onClickModalWindow])

    const onClickLearnClose = useCallback(() => {
        dispatch(learnActions.setRandome({} as CardType))
        dispatch(learnActions.setCards([]))
        onClickModalWindow()
    }, [onClickModalWindow])

    return (
        <>
            <Modal onClickModalWindow={onClickModalWindow} open={open}>
                {
                    loading ? 
                    <></> : 
                    <>
                        <span>Learn</span>
                        <span>Question</span>
                        <div>
                            <Button onClick={onClickLearnClose}>Cancel</Button>
                            <Button onClick={setAnswer}>Show answer</Button>
                        </div>    
                    </>
                }
            </Modal>
        </>
    )
})