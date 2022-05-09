import { useCallback } from "react";
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { Button } from "../../../s-0-common/c-1-ui/Buttons/Button";
import { DoubleRange } from "../../../s-0-common/c-1-ui/DoubleRange/DoubleRange";
import { PATH } from "../../../s-1-main/m-1-ui/main/routes/path";
import { selectProfileEdit, selectProfileInitialize, selectProfileObtain, selectProfileUserID, selectProfileUserName } from "../../../s-1-main/m-2-bll/selectors"
import { useAppSelector } from "../../../s-1-main/m-2-bll/store"
import { profileActions } from "../p-2-bll/profileActions";

export const Profile = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const userNameProfile = useAppSelector(selectProfileUserName)
    const editProfile = useAppSelector(selectProfileEdit)
    const obtainProfile = useAppSelector(selectProfileObtain)
    const idProfile = useAppSelector(selectProfileUserID)
    const initializeProfile = useAppSelector(selectProfileInitialize)

    const edit = useCallback(()=>{
        dispatch(profileActions.setEdit(true))
    }, [dispatch])

    // const onChangeRequest = useCallback((title:string) => {
    //     dispatch(pack)
    // })

    // if (location.pathname === PATH.PROFILE){
    //     dispatch(pa)
    // }

    return (
        <>
           <aside>
               <div>
                   <div>
                       <img src="" alt="MyFoto" />
                   </div>
                   <h4>My name</h4>
                   <p>Who am I ?</p>
                   <Button onClick={edit}>Edite profile</Button>
               </div>
               <div>
                    <p>Number of cards</p>
                    <DoubleRange/>
               </div>
           </aside>
           <section></section>
        </>
    )
}