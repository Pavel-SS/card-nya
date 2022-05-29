import { useCallback, useState } from "react";
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { DoubleRange } from "../../../s-0-common/c-1-ui/DoubleRange/DoubleRange";
import { SearchPanel } from "../../../s-0-common/c-1-ui/SearchPanel/SearchPanel";
import { PATH } from "../../../s-1-main/m-1-ui/main/routes/path";
import { selectPackName, selectProfileEdit, selectProfileInitialize, selectProfileObtain, selectProfileUserID, selectProfileUserName } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { PacksTable } from "../../f-3-packs/p-1-ui/PacksTable";
import { packsActions } from "../../f-3-packs/p-2-bll/packsActions";
import { profileActions } from "../p-2-bll/profileActions";
import { ProfileEdit } from "./u-1-edit/ProfileEdit";
import { AddPackModal } from "../../f-5-modal_window/m-1-add_modal/AddPackModal"
import profile_ava from "../../../s-3-assets/img/profile_ava.png"

import gnel from "../../../s-1-main/app/style/gnel.module.scss"
import text from "../../../s-1-main/app/style/text.module.scss"

export const Profile = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const userNameProfile = useAppSelector(selectProfileUserName)
    const editProfile = useAppSelector(selectProfileEdit)
    const userID = useAppSelector(selectProfileUserID)
    const packName = useAppSelector(selectPackName)

    const [adding, setAdding] = useState<boolean>(false)

    const edit = useCallback(()=>{
        dispatch(profileActions.setEdit(true))
    }, [dispatch])

    const onChangeRequest = useCallback((title:string) => {
        dispatch(packsActions.setCurrentPage(1))
        dispatch(packsActions.setSearch(title))
    },[dispatch])

    if (editProfile) {
        return <ProfileEdit/>
    }

    const addPackOpen = () => {
        setAdding(true)
    }

    const addPackClose = () => {
        setAdding(false)
    }

    if (location.pathname === PATH.PROFILE){
        dispatch(packsActions.setUserPacks(userID))
        dispatch(packsActions.setPacksStatus('All'))
    }

    return (
        <div className={gnel.block__profile} >
           <aside>
                   <img src={profile_ava} alt="avatar"/>
                   <h4 className={text.fs18_700}>{userNameProfile}</h4>
                   <Button 
                        onClick={edit}
                        className={`${gnel.btn} ${gnel.btn_bg} ${text.fs14_400}`}
                   >
                       Edite profile
                    </Button>
               <div>
                    <p className={text.fs18_700}>Number of cards</p>
                    <DoubleRange/>
               </div>
           </aside>
           <AddPackModal
                onClickModalWindow={addPackClose}
                open = {adding}
           />
           <section>
               <p>My Pack List</p>
               <SearchPanel 
                    value={packName} 
                    onRechenge={onChangeRequest}
                    placeholder={"Enter pack's title"}
               />
               <Button
                    onClick={addPackOpen} 
               >
                   Add pack
               </Button>
               <PacksTable/>
           </section>
        </div>
    )
}