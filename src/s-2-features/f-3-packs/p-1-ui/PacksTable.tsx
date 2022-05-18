import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { selectPackCardsCount, selectPackMaxCards, selectPackMinCards, selectPackName, selectPackPage, selectPackPageCount, selectPacks, selectPackSort, selectPackUserID } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { packsActions } from "../p-2-bll/packsActions"
import { getPacks } from "../p-2-bll/packsThunk"
import { PackTableHeader } from "./PackTableHeader"
import { PackTableRow } from "./PackTableRow"

export const PacksTable = () => {
    const dispatch = useDispatch()

    const packs = useAppSelector(selectPacks)
    const packName = useAppSelector(selectPackName)
    const userID = useAppSelector(selectPackUserID)
    const max = useAppSelector(selectPackMaxCards)
    const min = useAppSelector(selectPackMinCards)
    const packSort = useAppSelector(selectPackSort)
    const packPage = useAppSelector(selectPackPage)
    const packPageCount = useAppSelector(selectPackPageCount)
    const packCardsCount = useAppSelector(selectPackCardsCount)

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, packName, userID, packSort, max, min, packPageCount])

    const onChangePage = useCallback((page: number)=>{
        dispatch(packsActions.setCurrentPage(page))
        dispatch(getPacks())
    }, [dispatch])

    const onChangePacksCount = useCallback((quantity: number) => {
        dispatch(packsActions.setPageCount(quantity))
    }, [dispatch]) 

    return (
        <table>
            <thead>
                <PackTableHeader text={'name'} param={'name'}/>
                <PackTableHeader text={'cards'} param={'cardsCount'}/>
                <PackTableHeader text={'update'} param={'updated'}/>
                <PackTableHeader text={'creator'} param={'user_name'}/>
                <td>actions</td>
            </thead>
            <tbody>
                <PackTableRow packs={packs}/>
            </tbody>
        </table>
    )
}