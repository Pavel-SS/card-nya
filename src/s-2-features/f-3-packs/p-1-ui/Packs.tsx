import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../s-0-common/c-1-ui/Buttons/Button'
import { DoubleRange } from '../../../s-0-common/c-1-ui/DoubleRange/DoubleRange'
import { Radio } from '../../../s-0-common/c-1-ui/Radio/Radio'
import { SearchPanel } from '../../../s-0-common/c-1-ui/SearchPanel/SearchPanel'
import {GeneralOrMyPacks} from '../../../s-1-main/m-2-bll/initState'
import { selectPackName, selectPackTypeSort, selectProfileUserID } from '../../../s-1-main/m-2-bll/selectors'
import { useAppSelector } from '../../../s-1-main/m-2-bll/store'
import { AddPackModal } from '../../f-5-modal_window/m-1-add_modal/AddPackModal'
import { packsActions } from '../p-2-bll/packsActions'
import { PacksTable } from './PacksTable'

const typePack: GeneralOrMyPacks[] = ['My','All']

export const Packs = () => {
    
    const dispatch = useDispatch()

    const [addOpen, setAddOpen] = useState<boolean>(false)
    const [whosePack, setWhosePack] = useState<string>(typePack[0])
    
    const userID = useAppSelector(selectProfileUserID)
    const packName = useAppSelector(selectPackName)
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

    const addPackClose = useCallback(() => {
        setAddOpen(false)
    }, [])

    const addPackOpen = useCallback(() => {
        setAddOpen(true)
    }, [])


    return (
        <>
        <AddPackModal onClickModalWindow={addPackClose} open={addOpen}/>
        <div>
            <p>PACK</p>
            <Radio options={typePack} onChangeOption={onChangeTypePacks}/>
            <DoubleRange/>
        </div>
        <div>
            <SearchPanel
                value = {packName}
                onRechenge = {onChangeRequest}
                placeholder = {'Search'}
            />
            <Button onClick={addPackOpen}>
                Add pack
            </Button>
        </div>
        <PacksTable/>
        </>
    )
}