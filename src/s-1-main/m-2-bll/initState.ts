// App
export type InitAppStateType = {
    status: string
    error: string
    loading: boolean
}

export const InitAppState: InitAppStateType = {
    status:'',
    error:'',
    loading: false
}



//registration
export type InitStateType = {
    loading: boolean;
    success: boolean;
    error: string
}

export const InitState: InitStateType = {
    loading: false,
    success: false,
    error: ''
}

