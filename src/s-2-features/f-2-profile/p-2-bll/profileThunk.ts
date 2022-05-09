import { profileActions } from './profileActions';
import { GeneralThunkType } from "../../../s-1-main/m-2-bll/store";
import { profileAPI } from '../p-3-api/profileAPI';
import { networkErrorHandler } from '../../../utils/networkErrorHandler';

export const profileUpdateThunk = (name: string, avatar: string): GeneralThunkType => async dispatch=> {
    dispatch(profileActions.setObtain(true))
    try {
        const response = await profileAPI.update(name, avatar)
        dispatch(profileActions.setUserData(response.data.userUpdate))
        dispatch(profileActions.setEdit(false))
    } catch(e) {
        networkErrorHandler(dispatch, e as Error)
    } finally {
        dispatch(profileActions.setObtain(false))
    }
}
