import { UserType } from '../../s-2-features/f-2-profile/p-3-api/profileAPI';
import { PackParamsType, PackType } from '../../s-2-features/f-3-packs/p-3-api/packsAPI';


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

//pack
export type GeneralOrMyPacks = 'All' | 'My'

export const InitPackState = {
    packs: [] as PackType[],
    minCardsCount: 0,
    maxCardsCount: 150,
    packsType: 'All' as GeneralOrMyPacks,
    params: {
        packName: '',
        min: 0,
        max: 103,
        sortPacks: '0updated',
        page: 1,
        pageCount: 15,
        user_id: '',
    } as PackParamsType,
    cardPacksTotalCount: 0,
}

export type InitPackStateType = typeof InitPackState

