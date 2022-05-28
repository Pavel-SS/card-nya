import { InferActionType } from './../../../../s-1-main/m-2-bll/action';

export type SetNewPasswordActionType = InferActionType<typeof setNewPasswordAction>

export const setNewPasswordAction = {
    setLoading: (loading: boolean) => ({
        type: 'newPassword/SET_LOADING',
        payload: {loading}
    } as const),
    setSucccess: (success: boolean) => ({
        type: 'newPassword/SET_SUCCESS',
        payload: {success}
    } as const),
    setError: (error: string) => ({
        type: 'newPassword/SET_ERROR',
        payload: { error }
    } as const)
}