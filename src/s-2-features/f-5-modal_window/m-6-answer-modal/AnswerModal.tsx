import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button"
import { Radio } from "../../../s-0-common/c-1-ui/Radio/Radio"
import { selectAppIsLoading, selectLearnCards, selectRandomCards } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { getRandomeCards } from "../../../utils/getRandom"
import { Grades, GRADES, GradeType } from "../../../utils/grade/grade"
import { learnActions } from "../../../s-1-main/m-2-bll/learn/learnAction"
import { rate } from "../../../s-1-main/m-2-bll/learn/learnThunk"
import { CardType } from "../../f-4-cards/c-3-api/cardsAPI"
import { Modal } from "../Modal"
import { Preloader } from "../../../s-0-common/c-1-ui/Preloader/Preloader"

import s from "../../../s-1-main/app/App.module.scss"

type AnswerModalType = {
    onClickLearnPack: () => void
    onClickClose: () => void
    open: boolean
    name: string
}

const gradesArr = [
    GRADES.ONE, 
    GRADES.TWO, 
    GRADES.THREE, 
    GRADES.FOUR, 
    GRADES.FIVE
]

export const AnswerModal: React.FC<AnswerModalType> = React.memo(({
    onClickLearnPack,
    onClickClose,
    open,
    name
}) => {

    const dispatch = useDispatch()

    const [grade, setGrade] = useState<GradeType>(GRADES.ONE)
    const [rating, setRating] = useState<boolean>(false)

    const loading = useAppSelector(selectAppIsLoading)
    const cards = useAppSelector(selectLearnCards)
    const randomCard = useAppSelector(selectRandomCards)
    
    const nextQuestion = useCallback(()=>{
        dispatch(learnActions.setRandomCard(getRandomeCards(cards)))
        onClickLearnPack()
        onClickClose()
        setRating(false)
        setGrade(GRADES.ONE)
    },[dispatch, onClickLearnPack, onClickClose, cards])

    const assessment = useCallback(() => {
        dispatch(rate(Grades[grade], randomCard._id))
        setRating(true)
    },[dispatch, grade, rating, randomCard])

    const onChangeOption = useCallback((grade: GradeType) => {
        setGrade(grade)
        setRating(false)
    }, [])

    const onClickLearnClose = useCallback(()=>{
        onClickClose()
        dispatch(learnActions.setRandomCard({} as CardType))
        dispatch(learnActions.setCards([]))
        setRating(false)
    }, [dispatch, onClickClose])


    return (
        <Modal onClickClose={onClickLearnClose} open={open}>
            {
                loading ? 
                <div className={s.appProgress}><Preloader/></div> : 
                <>
                    <div>
                        <p>Learn: {name}</p>
                        <p>Question: {randomCard.question}</p>
                        <p>Answer: {randomCard.answer}</p>
                    </div>
                    <div>
                        Rate youself: 
                        <Radio 
                            name={'radio'}
                            value={grade}
                            options={gradesArr}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                    <div>
                        <Button onClick={onClickLearnClose}> Cancel</Button>
                        <Button onClick={assessment} disabled={rating}>Rate</Button>
                        <Button onClick={nextQuestion}>Next</Button>
                    </div>
                </>
            }
        </Modal>
    )
})

