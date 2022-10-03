import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Paginator } from "../../../s-0-common/c-1-ui/Paginator/Paginator"
import { selectPackCardsCount, selectPackMaxCards, selectPackMinCards, selectPackName, selectPackPage, selectPackPageCount, selectPacks, selectPackSort, selectPackUserID } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { packsActions } from "../p-2-bll/packsActions"
import { getPacks } from "../p-2-bll/packsThunk"
import { PackTableHeader } from "./PackTableHeader"
import { PackTableRow } from "./PackTableRow"

import s from "./../../style/tableStyle.module.scss"

export const PacksTable = () => {
    
    const packs = useAppSelector(selectPacks)
    const packName = useAppSelector(selectPackName)
    const userID = useAppSelector(selectPackUserID)
    const max = useAppSelector(selectPackMaxCards)
    const min = useAppSelector(selectPackMinCards)
    const packSort = useAppSelector(selectPackSort)
    const packPage = useAppSelector(selectPackPage)
    const packPageCount = useAppSelector(selectPackPageCount)
    const packCardsCount = useAppSelector(selectPackCardsCount)
    
    const dispatch = useDispatch()
    
    const onChangePage = useCallback((page: number)=>{
        dispatch(packsActions.setCurrentPage(page))
        dispatch(getPacks())
    }, [dispatch])

    const onChangePacksCount = useCallback((quantity: number) => {
        dispatch(packsActions.setPageCount(quantity))
    }, [dispatch]) 

    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, packName, userID, packSort, max, min, packPageCount])

    return (
        <>
            <table className={s.table}>
                <thead >
                    <tr className={s.table__header}>
                         <PackTableHeader text={'name'} param={'name'} />
                         <PackTableHeader text={'cards'} param={'cardsCount'} />
                         <PackTableHeader text={'update'} param={'updated'} />
                         <PackTableHeader text={'creator'} param={'user_name'} />
                         <th className={s.table__th}>actions</th>
                    </tr>
                </thead>
                <tbody className={s.table__body}>
                    <PackTableRow packs={packs} />
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} className={s.pagination}>
                                <Paginator 
                                    changingNumberOfRenderedElements={onChangePacksCount} 
                                    changePage={onChangePage}
                                    totalElementCount={packCardsCount}
                                    pageCount={packPageCount} 
                                    page={packPage} 
                                />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}