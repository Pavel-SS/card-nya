
import { useState } from "react"
import { useDispatch } from "react-redux"
import { SortPositionType } from "../../../s-1-main/m-2-bll/initState"
import { cardsActions } from "../c-2-bll/cardsActions"

import s from "./../../style/tableStyle.module.scss"

type CardsHeaderNameSortType = 'answer' | 'question' | 'updated' | 'grade'

type CardsTableHeaderType = {
    text: string
    param: CardsHeaderNameSortType
}

export const CardsTableHeader = ({text,param}: CardsTableHeaderType) => {
    const dispatch = useDispatch()

    const [sortPosition, setSortPosition] = useState<SortPositionType>('0')
    const [nameSort, setNameSort] = useState<CardsHeaderNameSortType>('updated')

    const changeSortPosition = (pos: SortPositionType) => {
        setSortPosition(pos)
        dispatch(cardsActions.setSortParameters(pos + nameSort))
    }

    const changeNameSort = (name: CardsHeaderNameSortType) => {
        setNameSort(name)
        dispatch(cardsActions.setSortParameters(sortPosition + name))
    }

    return (
        <td className={s.table__th}>
            <span onClick={() => changeNameSort(param)}>{text}</span>
            <div className={s.arrow__btns}>
                <div className={`${s.arrow} ${s.arrow_up}`}  onClick={() => changeSortPosition('0')}>&#62;</div>
                <div className={`${s.arrow} ${s.arrow_down}`}  onClick={() => changeSortPosition('1')}>&#62;</div>
            </div>
        </td>
    )
}