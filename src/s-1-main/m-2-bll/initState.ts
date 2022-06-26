import { UserType } from '../../s-2-features/f-2-profile/p-3-api/profileAPI';
import { PackParamsType, PackType } from '../../s-2-features/f-3-packs/p-3-api/packsAPI';
import { CardType } from '../../s-2-features/f-4-cards/c-3-api/cardsAPI';


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
// login
export const InitLoginState = {
    loading: false,
    success: false,
    error: ''
}
export type InitLoginStateType = typeof InitState

// profile
export const InitProfileState = {
    user: {} as UserType,
    edit: false,
    obtain: false,
    initialize: false,
}
export type InitProfileStateType = typeof InitProfileState

//pack
export type GeneralOrMyPacks = 'All' | 'My'
export type PacksSortType = 'name' | 'cardsCount' | 'updated' | 'user_name'

export const InitPackState = {
    packs: [] as PackType[],
    minCardsCount: 0,
    maxCardsCount: 103,
    packsType: 'All' as GeneralOrMyPacks,
    params: {
        packName: '',
        min: 0,
        max: 103,
        sortPacks: '0updated',
        page: 1,
        pageCount: 10,
        user_id: '',
    } as PackParamsType,
    cardPacksTotalCount: 0,
}

export type InitPackStateType = typeof InitPackState

//card
export type CardsParamsType = {
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number,
    max: number,
    sortCards: string
    page: number
    pageCount: number
}

export const InitialCardState = {
    cards: [] as CardType[],
    params: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 5,
        sortCards: '0grade',
        page: 1,
        pageCount: 10,
    } as CardsParamsType,
    cardsTotalCount: 0,
    packName: '',
}

export type InitialCardStateType = typeof InitialCardState

//learn
export const learnInitialState = {
    cards: [] as CardType[],
    randomeCard: {} as CardType
}
export type LearnInitialStateType = typeof learnInitialState
//
export type SortPositionType = '0' | '1'