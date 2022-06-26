import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"
import { DelPackModal } from "../../../f-5-modal_window/m-2-del_modal/DelPackModal"
import { EditPackModal } from "../../../f-5-modal_window/m-3-edit_modal/EditPackModal"
import { LearnPackModal } from "../../../f-5-modal_window/m-5-learn_modal/LearnPackModal"
import { PackType } from "../../p-3-api/packsAPI"
import { learnCardsThunk } from "../../../../s-1-main/m-2-bll/learn/learnThunk";

type PackActionType = {
    myPack: boolean
    pack: PackType
}

export const PackActionPanel: React.FC<PackActionType> = React.memo(({ myPack, pack }) => {
    const dispatch = useDispatch();

    const [delPack, setDelPack] = useState<boolean>(false)
    const [editPack, setEditPack] = useState<boolean>(false)
    const [learnPack, setLearnPack] = useState<boolean>(false)

    const delPackOpen = useCallback(() => {
        setDelPack(true)
    }, [])
    const delPackClose = useCallback(() => {
        setDelPack(false)
    }, [])
    const editPackOpen = useCallback(() => {
        setEditPack(true)
    }, [])
    const editPackClose = useCallback(() => {
        setEditPack(false)
    }, [])
    const learnPackOpen = useCallback(() => {
        setLearnPack(true)
    }, [])
    const learnPackClose = useCallback(() => {
        setLearnPack(false)
    }, [])
    const startLearn = useCallback(() => {
        setLearnPack(true)
        dispatch(learnCardsThunk(pack._id))
    }, [])

    return (
        <>
            <LearnPackModal 
                name={pack.name} 
                onClickLearnPack={learnPackOpen} 
                onClickModalWindow={learnPackClose} 
                open={learnPack}
            />
            <EditPackModal 
                id={pack._id} 
                name={pack.name} 
                onClickModalWindow={editPackClose} 
                open={editPack}
            />
            <DelPackModal 
                id={pack._id} 
                name={pack.name} 
                onClickModalWindow={delPackClose} 
                open={delPack}
            />
            {pack.cardsCount > 0 && 
                    <Button onClick={startLearn}>Learn</Button>
            }
            { myPack && <>
                    <Button onClick={editPackOpen}>Edit</Button>
                    <Button onClick={delPackOpen}>Del</Button>
            </>}
        </>
    )
})