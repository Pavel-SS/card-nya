import { useState } from "react"
import { useDispatch } from "react-redux"
import { PacksSortType, SortPositionType } from "../../../s-1-main/m-2-bll/initState"
import { packsActions } from "../p-2-bll/packsActions"

import s from "./tableStyle.module.scss"

type PackTableHeaderPropsType = {
    text: string
    param: PacksSortType
}

export const PackTableHeader = ({text, param}:PackTableHeaderPropsType) => {
    const dispatch = useDispatch()

    const [sortPosition, setSortPosition] = useState<SortPositionType>('0')
    const [nameSort, setNameSort] = useState<PacksSortType>('updated')

    const changeSortPosition = (pos: SortPositionType) => {
        setSortPosition(pos)
        dispatch(packsActions.setSortParameters(pos + nameSort))
    }
    const changeNameSort = (name: PacksSortType) => {
        setNameSort(name)
        dispatch(packsActions.setSortParameters(sortPosition + name))
    }

    return (
        <td className={s.table__th}>
            <span onClick={() => changeNameSort(param)}>{text}</span>
            <div className={s.arrow__btns}>
                <div className={`${s.arrow} ${s.arrow_up}`} onClick={() => changeSortPosition('0')}>&#62;</div>
                <div className={`${s.arrow} ${s.arrow_down}`} onClick={() => changeSortPosition('1')}>&#62;</div>
            </div>
        </td>
    )
} 