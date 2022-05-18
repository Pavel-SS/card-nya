import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { Paginator } from "../../../s-0-common/c-1-ui/Paginator/Paginator"
import { selectCardAnswer, selectCardQuestion, selectCards, selectCardsPage, selectCardsPageCount, selectCardsSort, selectCardsTotalCount, selectProfileUserID } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { cardsActions } from "../c-2-bll/cardsActions"
import { getCards } from "../c-2-bll/cardsThunk"
import { CardsTableHeader } from "./CardsTableHeader"
import { CardsTableRow } from "./CardsTableRow"


export const CardsTable = () => {
    const dispatch = useDispatch()

    const cards = useAppSelector(selectCards)
    const cardQuestion = useAppSelector(selectCardQuestion)
    const cardAnswer = useAppSelector(selectCardAnswer)
    const cardsSort = useAppSelector(selectCardsSort)
    const cardsPage = useAppSelector(selectCardsPage)
    const cardsPageCount = useAppSelector(selectCardsPageCount)
    const cardsTotalCount = useAppSelector(selectCardsTotalCount)
    const userID = useAppSelector(selectProfileUserID)

    const {packUserID} = useParams<'packUserID'>()

    useEffect(() => {
        dispatch(getCards())
        return () => {
            dispatch(cardsActions.setCards([]))
        }
    }, [dispatch, cardQuestion, cardAnswer, cardsPageCount, cardsSort])

    const onChangePage = useCallback((page: number) => {
        dispatch(cardsActions.setCurrentPage(page))
        dispatch(getCards())
    },[dispatch])

    const onChangeCardsCount = useCallback((quantity: number) => {
        dispatch(cardsActions.setCardsPageCount(quantity))
    },[dispatch])

    return (
        <table>
            <thead>
                <tr>
                    <CardsTableHeader text={'question'} param={'question'}/>
                    <CardsTableHeader text={'answer'} param={'answer'}/>
                    <CardsTableHeader text={'updated'} param={'updated'}/>
                    <CardsTableHeader text={'grade'} param={'grade'}/>
                    {
                        userID === packUserID && <td> actions </td>
                    }    
                </tr>
            </thead>
            <tbody>
                <CardsTableRow cards={cards}/>
            </tbody>
            <tfoot>
                <Paginator
                    changingNumberOfRenderedElements = {onChangeCardsCount}
                    changePage = {onChangePage}
                    totalElementCount = {cardsTotalCount}
                    page = {cardsPage}
                    pageCount={cardsPageCount}
                />
            </tfoot>
        </table>
    )
}