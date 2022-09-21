
import { AxiosResponse } from 'axios';
import { instance } from "../../../s-1-main/m-3-dal/instace"


//types
export type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: Date
    updated: Date
    more_id: string
    __v: number
    deckCover: null | string
}

export type PacksType = {
    cardPacks: PackType[]
    cardsCount: number
    minCardsInPack: number
    maxCardsInPack: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type PacksResponse = {
    newCardsInPack: PackType
    deleteCardsInPack: PackType
    updateCardsInPack: PackType
}


export type AddCardType = {
    cardsPack: {
        name: string,
        deckCover: string,
        private: boolean
    }
}

export type UpdatePackType = {
    cards: {
        _id: string
        user_id?: string
        user_name?: string
        private?: boolean
        name?: string
        path?: string
        grade?: number
        shots?: number
        cardsCount?: number
        type?: string
        rating?: number
        created?: Date
        updated?: Date
        more_id?: string
        __v?: number
        deckCover?: null | string
    }
}
export type AdditionalPackResponseType = {
    token: string
    tokenDeathTime: number
}

export type PackParamsType = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
}

export const packsAPI = {
    getPacks (params: PackParamsType){
        return instance.get<any, AxiosResponse<PacksType>, PackParamsType>('cards/pack', {params}).then(res => res.data)
    },
    addPacks (cardPacks: Partial<AddCardType>){
        return instance.post<any, AxiosResponse<AdditionalPackResponseType & Pick<PacksResponse, 'newCardsInPack'>>, Partial<AddCardType>>(`cards/pack`, cardPacks)
    },
    deletePack (_id: string) {
        return instance.delete<any, AxiosResponse<AdditionalPackResponseType & Pick<PacksResponse, 'deleteCardsInPack'>>>(`cards/pack?id=${_id}`)
    },
    updatePack (cardsPack: UpdatePackType) {
        return instance.put<any, AxiosResponse<AdditionalPackResponseType & Pick<PacksResponse, 'updateCardsInPack'>>, UpdatePackType>(`cards/pack`, cardsPack)
    }
}