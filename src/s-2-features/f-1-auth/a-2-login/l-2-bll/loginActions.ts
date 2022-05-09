
import { InferActionType } from '../../../../s-1-main/m-2-bll/action';

export type LoginActionType = InferActionType<typeof loginActions>

export const loginActions = {
    setLoading: (loading: boolean) => ({
        type: 'login/SET_LOADING',
        payload: {loading}} as const
    ), 
    setLogged: (success: boolean) => ({
        type: 'login/SET_LOGGED',
        payload: {success}} as const
    ),
    setError: (error: string) => ({
        type: 'login/SET_ERROR',
        payload: {error}} as const
    ),
}