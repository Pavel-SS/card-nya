import { InferActionType } from './../../../../s-1-main/m-2-bll/action';


export type ForgotPasswordActionType = InferActionType<typeof forgotPasswordAction>

export const forgotPasswordAction = {
    setLoading: (loading: boolean) => ({
        type: 'forgotPassword/SET_LOADING',
        payload: { loading }
    } as const),
    setSucccess: (success: boolean) => ({
        type: 'forgotPassword/SET_SUCCESS',
        payload: { success }
    } as const),
    setError: (error: string) => ({
        type: 'forgotPassword/SET_ERROR',
        payload: { error }
    }as const)
}