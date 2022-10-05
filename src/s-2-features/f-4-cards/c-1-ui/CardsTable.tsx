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

import s from "./../../style/tableStyle.module.scss"
import gnel from "../../../s-1-main/app/style/gnel.module.scss"

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
        <table className={s.table}>
            <thead>
                <tr className={s.table__header_card}>
                    <CardsTableHeader text={'question'} param={'question'}/>
                    <CardsTableHeader text={'answer'} param={'answer'}/>
                    <CardsTableHeader text={'updated'} param={'updated'}/>
                    <CardsTableHeader text={'grade'} param={'grade'}/>
                    {
                        userID === packUserID && <td className={s.table__th}> actions </td>
                    } 
                </tr>
            </thead>
            <tbody className={s.table__body}>
                <CardsTableRow cards={cards}/>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={1} className={`${s.pagination} ${gnel.paginator}`}>
                        <Paginator changingNumberOfRenderedElements={onChangeCardsCount} changePage={onChangePage}
                            totalElementCount={cardsTotalCount} pageCount={cardsPageCount} page={cardsPage}  />
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}