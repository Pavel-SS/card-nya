import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../s-1-main/m-2-bll/store"
import {selectProfileUser, selectProfileObtain, selectProfileEdit} from "../../../../s-1-main/m-2-bll/selectors"
import { useCallback, useState } from "react"
import { profileActions } from "../../p-2-bll/profileActions"
import { profileUpdateThunk } from "../../p-2-bll/profileThunk"
import { Profile } from "../Profile"
import profile_ava from "../../../../s-3-view/profile_ava.png"
import { InputText } from "../../../../s-0-common/c-1-ui/InputText/InputText"
import { Button } from "../../../../s-0-common/c-1-ui/Buttons/Button"

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
        dispatch(profileUpdateThunk(name, 'https//avatar-url.img'))
    },[dispatch, name])

    const changeName = useCallback((name: string)=>{
        setName(name)
    },[])

    if(!edit){
        return <Profile/>
    }

    return (
        <>
            <div>
               Personal Data
            </div>
            <div>
                <img src={profile_ava} alt="avatar"/>
            </div>
            <InputText value = {name} onChangeText = {changeName}/>
            <InputText value = {user.email}/>
            <div>
                <Button onClick = {profileNav}>Cancel</Button>
                <Button onClick = {updating}>Save</Button>
            </div>
        </>
    )
}