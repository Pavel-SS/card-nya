import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../s-0-common/c-1-ui/Buttons/Button'
import { DoubleRangePacks } from '../../../s-0-common/c-1-ui/DoubleRange/DoubleRangePacks'
import { Radio } from '../../../s-0-common/c-1-ui/Radio/Radio'
import { SearchPanel } from '../../../s-0-common/c-1-ui/SearchPanel/SearchPanel'
import {GeneralOrMyPacks} from '../../../s-1-main/m-2-bll/initState'
import { selectPackName, selectPackTypeSort, selectProfileUserID } from '../../../s-1-main/m-2-bll/selectors'
import { useAppSelector } from '../../../s-1-main/m-2-bll/store'
import { AddPackModal } from '../../f-5-modal_window/m-1-add_modal/AddPackModal'
import { packsActions } from '../p-2-bll/packsActions'
import { PacksTable } from './PacksTable'

import gnel from "../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../s-1-main/app/style/text.module.scss"
import style from './pack.module.scss'

const typePack: GeneralOrMyPacks[] = ['All','My']

export const Packs = () => {
    
    const dispatch = useDispatch()

    const [addOpen, setAddOpen] = useState<boolean>(false)
   
    const userID = useAppSelector(selectProfileUserID)
    const packName = useAppSelector(selectPackName)
    const packTypeSort = useAppSelector(selectPackTypeSort)
    
    packTypeSort === 'All' ? dispatch(packsActions.setUserPacks('')) : dispatch(packsActions.setUserPacks(userID))

    const [whosePack, setWhosePack] = useState(typePack[0])

    const onChangeTypePacks = useCallback((myOrAll: string) => {
        setWhosePack(myOrAll as GeneralOrMyPacks)
        dispatch(packsActions.setPacksStatus(myOrAll as GeneralOrMyPacks))
        if(myOrAll === 'All'){
            dispatch(packsActions.setUserPacks('')) 
            console.log(packsActions.setUserPacks(''))
        } else{
            dispatch(packsActions.setUserPacks(userID))
            console.log(packsActions.setUserPacks(userID))
        }
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
        <div className={gnel.block__profile}>
            <AddPackModal onClickClose={addPackClose} open={addOpen} />
            <div className={style.btn_section}>
                <Radio name={'radio'} options={typePack} value={whosePack} onChangeOption={onChangeTypePacks} />
                <DoubleRangePacks />
            </div>
            <div>
                <p>PACK</p>
                <SearchPanel value={packName} onRechenge={onChangeRequest} placeholder={'Search'} />
                <Button onClick={addPackOpen} className={`${gnel.btn} ${text.fs14_400} ${style.profileTable_btn}`}>
                    Add pack
                </Button>
                <PacksTable/>
            </div>

        </div>
    )
}