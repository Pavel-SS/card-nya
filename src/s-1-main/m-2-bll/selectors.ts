import { AppRootStateType } from "./store"


export const selectRegistrationSuccess = (state: AppRootStateType) => state.register.success
export const selectRegistrationError = (state: AppRootStateType) => state.register.error
export const selectRegistrationIsLoading = (state: AppRootStateType) => state.register.loading