import { AppRootStateType } from "./store"

export const selectLoginLogged = (state: AppRootStateType) => state.login.success
export const selectLoginIsLoading = (state: AppRootStateType) => state.login.loading
export const selectLoginError = (state: AppRootStateType) => state.login.error

// 
export const selectRegistrationSuccess = (state: AppRootStateType) => state.register.success
export const selectRegistrationError = (state: AppRootStateType) => state.register.error
export const selectRegistrationIsLoading = (state: AppRootStateType) => state.register.loading


// export const selectAppStatus = (state: AppRootStateType) => state.app.status
// export const selectAppError = (state: AppRootStateType) => state.app.error
// export const selectAppIsLoading = (state: AppRootStateType) => state.app.isLoading