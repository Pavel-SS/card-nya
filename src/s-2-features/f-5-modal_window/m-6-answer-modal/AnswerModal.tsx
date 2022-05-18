import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button"
import { Radio } from "../../../s-0-common/c-1-ui/Radio/Radio"
import { selectAppIsLoading, selectLearnCards, selectLearnRandomeCards } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { getRandomeCards } from "../../../utils/getRandom"
import { Grades, GRADES, GradeType } from "../../../utils/grade/grade"
import { learnActions } from "../../f-3-packs/p-2-bll/learn/learnAction"
import { rate } from "../../f-3-packs/p-2-bll/learn/learnReducer"
import { CardType } from "../../f-4-cards/c-3-api/cardsAPI"
import { Modal, ModalType } from "../Modal"

type AnswerModalType = ModalType & {
    onClickLearnPack: () => void
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
    onClickModalWindow,
    onClickLearnPack,
    open,
    name
}) => {

    const dispatch = useDispatch()

    const [grade, setGrade] = useState<GradeType>(GRADES.ONE)
    const [rating, setRating] = useState<boolean>(false)

    const loading = useAppSelector(selectAppIsLoading)
    const cards = useAppSelector(selectLearnCards)
    const randomCard = useAppSelector(selectLearnRandomeCards)
    
    const nextQuestion = useCallback(()=>{
        dispatch(learnActions.setRandome(getRandomeCards(cards)))
        onClickModalWindow()
        onClickLearnPack()
        setRating(false)
        setGrade(GRADES.ONE)
    },[dispatch, onClickModalWindow, onClickLearnPack, cards])

    const assessment = useCallback(() => {
        dispatch(rate(Grades[grade], randomCard._id))
        setRating(true)
    },[dispatch, grade, rating, randomCard])

    const onChangeOption = useCallback((grade: GradeType) => {
        setGrade(grade)
        setRating(false)
    }, [])

    const onClickLearnClose = useCallback(()=>{
        onClickModalWindow()
        dispatch(learnActions.setRandome({} as CardType))
        dispatch(learnActions.setCards([]))
        setRating(false)
    }, [dispatch, onClickModalWindow])


    return (
        <Modal onClickModalWindow={onClickLearnClose} open={open}>
            {
                loading ? 
                <></>: 
                <>
                    <div>
                        <p>Learn {name}</p>
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
                        <Button onClick={assessment}>Rate</Button>
                        <Button onClick={nextQuestion}>Next</Button>
                    </div>
                </>
            }
        </Modal>
    )
})

