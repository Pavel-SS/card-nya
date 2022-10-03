import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { selectAppIsLoading, selectRandomCards } from "../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../s-1-main/m-2-bll/store";
import { learnActions } from "../../../s-1-main/m-2-bll/learn/learnAction";
import { CardType } from "../../f-4-cards/c-3-api/cardsAPI";
import { Modal } from "../Modal";
import { Preloader } from "../../../s-0-common/c-1-ui/Preloader/Preloader";

import s from "../../../s-1-main/app/App.module.scss"
import { AnswerModal } from "../m-6-answer-modal/AnswerModal";

export type LearnPackModalType = {
    onClickLearnPack: () => void
    onClickClose: () => void
    open: boolean
    name: string
}

export const LearnPackModal: React.FC<LearnPackModalType> = React.memo(({
    onClickLearnPack,
    onClickClose,
    open,
    name
}) => {
    const dispatch = useDispatch()

    const [answerOpen, setAnswerOpen] = useState<boolean>(false)

    const randomCard = useAppSelector(selectRandomCards)
    const loading = useAppSelector(selectAppIsLoading)

    const setAnswerNoClose = useCallback(()=>{
        onClickClose()
        setAnswerOpen(true)
    }, [onClickClose])

    const setAnswerClose = useCallback(() => {
        setAnswerOpen(false)
    },[])

    const onClickLearnClose = useCallback(() => {
        dispatch(learnActions.setRandomCard({} as CardType))
        dispatch(learnActions.setCards([]))
        onClickClose()
    }, [onClickClose])

    return (
        <>
            <AnswerModal 
                onClickLearnPack = {onClickLearnPack}
                onClickClose= {setAnswerClose} 
                isOpen= {answerOpen} 
                name= {name}
            />
            <Modal onClickClose = {onClickLearnClose} open= {open}>
                {
                    loading ? 
                    <div className={s.appProgress}><Preloader/></div> : 
                    <>
                        <span>Learn: {name}</span>
                        <span>Question: {randomCard.question}</span>
                        <div>
                            <Button onClick={onClickLearnClose}>Cancel</Button>
                            <Button onClick={setAnswerNoClose}>Show answer</Button>
                        </div>    
                    </>
                }
            </Modal>
        </>
    )
})