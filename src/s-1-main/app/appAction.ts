import { InferActionType } from './../m-2-bll/action';

export const appAction = {
    setAppStatus:(status:string) => ({
        type: 'app/SET_STATUS', 
        payload:{status}
    } as const),
    setAppError: (error:string) => ({
        type: 'app/SET_ERROR',
        payload:{error}
    } as const),
    setAppLoading: (isLoading:boolean) => ({
        type: 'app/SET_LOADING',
        payload:{isLoading}
    } as const)
}

export type AppActionType = InferActionType<typeof appAction>