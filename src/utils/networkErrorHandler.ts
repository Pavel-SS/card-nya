import { appAction, AppActionType } from './../s-1-main/app/appAction';
import axios from "axios";
import { Dispatch } from "redux";


export const networkErrorHandler = (dispatch: Dispatch<AppActionType>, e: Error) => {
    if (axios.isAxiosError(e)){
        dispatch(appAction.setAppError(e.response ? e.response.data.error : e.message))
    } else {
        dispatch(appAction.setAppError('Error'))
    }
}