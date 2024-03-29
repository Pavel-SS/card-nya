import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { SearchPanel } from "../../../s-0-common/c-1-ui/SearchPanel/SearchPanel";
import { selectCardAnswer, selectCardQuestion, selectCardsPackID, selectCardsPackName, selectProfileUserID } from "../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../s-1-main/m-2-bll/store";
import { AddCardModal } from "../../f-5-modal_window/m-1-add_modal/AddCardModal";
import { cardsActions } from "../c-2-bll/cardsActions";
import { CardsTable } from "./CardsTable";

import s from "./card.module.scss";
import gnel from "../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../s-1-main/app/style/text.module.scss"

export const CardsPage = () => {
    const dispatch = useDispatch(),
          navigate = useNavigate();
    
    const packName = useAppSelector(selectCardsPackName)
    const question = useAppSelector(selectCardQuestion)
    const answer = useAppSelector(selectCardAnswer)
    const cardsPackID = useAppSelector(selectCardsPackID)

    const profileUserID = useAppSelector(selectProfileUserID)

    const onChangeQuestion = useCallback((title: string) => {
        dispatch(cardsActions.setCurrentPage(1))
        dispatch(cardsActions.setQuestion(title))
    },[dispatch])

    const onChangeAnswer = useCallback((title: string)=> {
        dispatch(cardsActions.setCurrentPage(1))
        dispatch(cardsActions.setAnswer(title))
    }, [dispatch])

    const [addOpen, setAddOpen] = useState<boolean>(false)

    const cardAddOpen = useCallback(()=>{
        setAddOpen(true)
    },[])

    const cardAddClose = useCallback(()=>{
        setAddOpen(false)
    },[])
    
    const returnPage = useCallback(()=>{
        navigate(-1)
    },[navigate])

    const {packUserID} = useParams<'packUserID'>()
    
    return (
        <>  
            <AddCardModal 
                onClickClose = {cardAddClose} 
                open = {addOpen}
                cardsPackID = {cardsPackID}
            />
            <div>
                <Button className={s.arrow} onClick={returnPage}>&larr;</Button>
                <div className={`${s.pack_name} ${gnel.item_title} ${text.fs27_700}` }>
                    {packName}
                </div>
                <SearchPanel 
                    onRechenge={onChangeQuestion}
                    value={question}
                    placeholder ={'Enter a question'} 
                />
                <SearchPanel 
                    onRechenge={onChangeAnswer}
                    value={answer}
                    placeholder ={'Enter answer'}
                />
                {
                    profileUserID === packUserID && <Button className={`${gnel.btn} ${text.fs14_400} ${s.card_btn}`} onClick={cardAddOpen}>Add card</Button>
                }
            </div>
            <CardsTable/>
        </>
    )
}