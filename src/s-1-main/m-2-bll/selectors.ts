
import { AppRootStateType } from "./store"

export const selectLoginLogged = (state: AppRootStateType) => state.login.success
export const selectLoginIsLoading = (state: AppRootStateType) => state.login.loading
export const selectLoginError = (state: AppRootStateType) => state.login.error

// 
export const selectRegistrationSuccess = (state: AppRootStateType) => state.register.success
export const selectRegistrationError = (state: AppRootStateType) => state.register.error
export const selectRegistrationIsLoading = (state: AppRootStateType) => state.register.loading


export const selectAppStatus = (state: AppRootStateType) => state.app.status
export const selectAppError = (state: AppRootStateType) => state.app.error
export const selectAppIsLoading = (state: AppRootStateType) => state.app.loading

//profile
export const selectProfileUser = (state: AppRootStateType) => state.profile.user
export const selectProfileUserID = (state: AppRootStateType) => state.profile.user._id
export const selectProfileUserName = (state: AppRootStateType) => state.profile.user.name
export const selectProfileEdit = (state: AppRootStateType) => state.profile.edit
export const selectProfileInitialize = (state: AppRootStateType) => state.profile.initialize
export  const selectProfileObtain = (state: AppRootStateType) => state.profile.obtain 

//Packs
export const selectPacks = (state: AppRootStateType) => state.packs.packs
export const selectPackUserID = (state: AppRootStateType) => state.packs.params.user_id
export const selectPackName = (state: AppRootStateType) => state.packs.params.packName
export const selectPackTypeSort = (state: AppRootStateType) => state.packs.packsType
export const selectPackCardsCount = ( state: AppRootStateType) => state.packs.cardPacksTotalCount
export const selectPackPage = (state: AppRootStateType) => state.packs.params.page
export const selectPackPageCount = (state: AppRootStateType) => state.packs.params.pageCount
export const selectPackSort = (state: AppRootStateType) => state.packs.params.sortPacks
export const selectPackMinCardsCount = (state: AppRootStateType) => state.packs.minCardsCount
export const selectPackMaxCardsCount = (state: AppRootStateType) => state.packs.maxCardsCount
export const selectPackMinCards = (state: AppRootStateType) => state.packs.params.min
export const selectPackMaxCards = (state: AppRootStateType) => state.packs.params.max


//Cards
export const selectCards = (state: AppRootStateType) => state.cards.cards
export const selectCardsPackName = (state: AppRootStateType) => state.cards.packName
export const selectCardQuestion = (state: AppRootStateType) => state.cards.params.cardQuestion
export const selectCardAnswer = (state: AppRootStateType) => state.cards.params.cardAnswer
export const selectCardsSort = (state: AppRootStateType) => state.cards.params.sortCards
export const selectCardsPackID = (state: AppRootStateType) => state.cards.params.cardsPack_id
export const selectCardsPage = (state: AppRootStateType) => state.cards.params.page
export const selectCardsPageCount = (state: AppRootStateType) => state.cards.params.pageCount
export const selectCardsTotalCount = (state: AppRootStateType) => state.cards.cardsTotalCount

//Learn
export const selectLearnCards = (state: AppRootStateType) => state.learn.cards
export const selectLearnRandomeCards = (state: AppRootStateType) => state.learn.randomeCard
