import { UserType } from '../../s-2-features/f-2-profile/p-3-api/profileAPI';


// App

export const InitAppState = {
    status:'',
    error:'',
    loading: false
}
export type InitAppStateType = typeof InitAppState


//registration


export const InitState = {
    loading: false,
    success: false,
    error: ''
}
export type InitStateType = typeof InitState

// profile
export const InitProfileState = {
    user: {} as UserType,
    edit: false,
    obtain: false,
    initialize: false,
}
export type InitProfileStateType = typeof InitProfileState