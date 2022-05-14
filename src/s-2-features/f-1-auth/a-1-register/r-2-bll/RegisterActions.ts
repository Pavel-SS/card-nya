import { InferActionType } from '../../../../s-1-main/m-2-bll/action';


export type RegisterActionsType = InferActionType<typeof registerActions>

export const registerActions = {
    setLoading: (loading: boolean) => ({
        type: 'register/SET_LOADING',
        payload: { loading }
    } as const),
    setSucccess: (success: boolean) => ({
        type: 'register/SET_SUCCESS',
        payload: { success }
    } as const),
    setError: (error: string) => ({
        type: 'register/SET_ERROR',
        payload: { error}
    } as const)
};