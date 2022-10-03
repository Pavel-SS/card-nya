import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store"
import {selectProfileUser, selectProfileObtain, selectProfileEdit} from "../../../../s-1-main/m-2-bll/selectors"
import { useCallback, useState } from "react"
import { profileActions } from "../../p-2-bll/profileActions"
import { profileUpdateThunk } from "../../p-2-bll/profileThunk"

import profile_ava from "../../../../s-3-assets/img/profile_ava.png"
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"

import gnel from "../../../../s-1-main/app/style/gnel.module.scss";
import text from "../../../../s-1-main/app/style/text.module.scss"
import { Preloader } from "../../../../s-0-common/c-1-ui/Preloader/Preloader"
import { Profile } from "../Profile"

export const ProfileEdit = () => {
    
    const dispatch = useDispatch()

    const user = useAppSelector(selectProfileUser)
    const edit = useAppSelector(selectProfileEdit)
    const obtain = useAppSelector(selectProfileObtain)

    const [name, setName] = useState<string>(user.name)

    const profileNav = useCallback(()=>{
        dispatch(profileActions.setEdit(false))
    },[dispatch])

    const updating = useCallback(()=>{
        dispatch(profileUpdateThunk(name, ''))
    },[dispatch, name])

    const changeName = useCallback((name: string)=>{
        setName(name)
    },[])

    if(!edit){
        return <Profile/>
    }

    return (
        <div className={`${gnel.block__auth}`}>
            <div className={`${gnel.block__auth_box} ${gnel.profile_edit}`}>
                {obtain && <Preloader/>}
                <h2 className={`${gnel.item_title} ${text.fs27_700}`}>
                    Personal Data
                </h2>
                <div className={gnel.block__avatar}>
                    <img src={profile_ava} alt="avatar" />
                </div>
                <form>
                    <label htmlFor="userName">user name</label>
                    <InputText value={name} id='userName' onChangeText={changeName} />
                    <label htmlFor="email">email</label>
                    <InputText value={user.email} id='userName'/>
                </form>
                <div className={gnel.btns}>
                    <Button onClick={profileNav} className={`${gnel.btn} ${text.fs14_400}`}>
                        Cancel
                    </Button>
                    <Button onClick={updating} className={`${gnel.btn} ${text.fs14_400}`}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}