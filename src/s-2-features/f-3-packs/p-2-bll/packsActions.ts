import { InferActionType } from './../../../s-1-main/m-2-bll/action';
import { GeneralOrMyPacks } from '../../../s-1-main/m-2-bll/initState';
import { PackType } from './../p-3-api/packsAPI';


export const packsActions = {
    setPacks: (packs: PackType[]) => ({
        type: 'packs/SET_PACKS',
        payload: {packs}
    } as const),
    setUserPacks: (user_id: string) => ({
        type: 'packs/SET_USER_PACKS',
        payload: {user_id}
    } as const),
    setPacksMin: (min: number) => ({
        type: 'packs/SET_PACKS_MIN',
        payload: {min}
    } as const),
    setPacksMax: (max: number) => ({
        type: 'packs/SET_PACKS_MAX',
        payload: {max}
    } as const),
    setCountCardsInPacks: (cardPacksTotalCount: number) => ({
        type: 'packs/SET_COUNT_CARD_IN_PACKS',
        payload: {cardPacksTotalCount}
    } as const),
    setCurrentPage: (page: number) => ({
        type: 'packs/SET_CURRENT_PAGE',
        payload: {page}
    } as const),
    setSearch: (packName: string) => ({
        type: 'packs/SET_SEARCH',
        payload: {packName}
    } as const),
    setSortParameters: (sortPacks: string) => ({
        type: 'packs/SET_SORT_PARAMETERS',
        payload: {sortPacks}
    } as const),
    setMinCardsCount: (minCardsCount: number) => ({
        type: 'packs/SET_MIN_CARDS_COUNT',
        payload: {minCardsCount}
    } as const),
    setMaxCardsCount: (maxCardsCount: number) => ({
        type: 'packs/SET_MAX_CARDS_COUNT',
        payload: {maxCardsCount}
    } as const),
    setPageCount: (pageCount: number) => ({
        type: 'packs/SET_PAGE_COUNT',
        payload: {pageCount}
    } as const),
    setPacksStatus: (packsType: GeneralOrMyPacks) => ({
        type: 'packs/SET_PACKS_STATUS',
        payload: {packsType}
    } as const)
}

export type PacksActionType = InferActionType <typeof packsActions>