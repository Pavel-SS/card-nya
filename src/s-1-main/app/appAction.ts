
export const appAction = {
    setAppStatus:(status:string) => ({
        type: 'app/SET_STATUS', 
        payload:{status}
    } as const),
    setAppError: (error:string) => ({
        type: 'app/SET_ERROR',
        payload:{error}
    } as const),
    selectAppLoading: (loading:boolean) => ({
        type: 'app/SET_LOADING',
        payload:{loading}
    } as const)
}