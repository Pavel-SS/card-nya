import { useState } from "react"
import { useDispatch } from "react-redux"
import { PacksSortType, SortPositionType } from "../../../s-1-main/m-2-bll/initState"
import { packsActions } from "../p-2-bll/packsActions"


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
        <td>
            <span onClick={() => changeNameSort(param)}>{text}</span>
            <div>
                <div onClick={() => changeSortPosition('0')}>up</div>
                <div onClick={() => changeSortPosition('1')}>down</div>
            </div>
        </td>
    )
} 