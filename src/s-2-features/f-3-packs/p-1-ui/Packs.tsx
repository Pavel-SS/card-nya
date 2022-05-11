import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {GeneralOrMyPacks} from '../../../s-1-main/m-2-bll/initState'
import { selectPackNameSearch, selectPackTypeSort, selectPackUserID } from '../../../s-1-main/m-2-bll/selectors'
import { useAppSelector } from '../../../s-1-main/m-2-bll/store'
import { packsActions } from '../p-2-bll/packsActions'

const typePack: GeneralOrMyPacks[] = ['My','All']

export const Packs = () => {
    
    const dispatch = useDispatch()
    const [addOpen, setAddOpen] = useState<boolean>(false)
    const [whosePack, setWhosePack] = useState<string>(typePack[0])

    const userID = useAppSelector(selectPackUserID)
    const packName = useAppSelector(selectPackNameSearch)
    const packTypeSort = useAppSelector(selectPackTypeSort)
    
    {packTypeSort === 'All' ? 
        dispatch(packsActions.setUserPacks('')): 
        dispatch(packsActions.setUserPacks(userID))
    }

    const onChangeTypePacks = useCallback((myOrAll: string) => {
        setWhosePack(myOrAll as GeneralOrMyPacks)
        dispatch(packsActions.setPacksStatus(myOrAll as GeneralOrMyPacks))
        myOrAll === 'All' ? dispatch(packsActions.setUserPacks('')): 
        dispatch(packsActions.setUserPacks(userID))
    },[dispatch, userID])

    const onChangeRequest = useCallback((title: string)=>{
        dispatch(packsActions.setCurrentPage(1))
        dispatch(packsActions.setSearch(title))
    },[dispatch])

    const addPackOff = useCallback(() => {
        setAddOpen(false)
    }, [])

    const addPackOn = useCallback(() => {
        setAddOpen(true)
    }, [])


    return (
        <>
        <p>PACK</p>
        </>
    )
}