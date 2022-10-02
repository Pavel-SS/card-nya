import { AxiosResponse } from 'axios';
import { instance } from '../../../s-1-main/m-3-dal/instace';
import { CardsParamsType } from './../../../s-1-main/m-2-bll/initState';

export type CardType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: Date
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    type: string
    updated: Date
    user_id: string
    __v: number
    _id: string
}

export type CardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    packUserId: string
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type CardResponses = {
    newCard: CardType
    deletedCard: CardType
    updatedCard: CardType
}

export type AddCardType = {
    card: {
        cardsPack_id: string
        question?: string
        answer?: string
        grade?: number
        shots?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
    }
}

export type UpdateCardType = {
    card: {
        _id: string
        answer?: string
        question?: string
        cardsPack_id?: string
        grade?: number
        shots?: number
        user_id?: string
        created?: Date
        updated?: Date
    }
}

export type AdditionalCardResponse = {
    token: string
    tokenDeathTime: number
}

export type RateType = {
    grade: number
    card_id: string
}

export type RateResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}

export const cardsAPI = {
    getCards(params: Partial<CardsParamsType>) {
        return instance.get<any, AxiosResponse<CardsResponseType>, Partial<CardsParamsType>>('cards/card', {params}).then(res => res.data)
    },
    addCards (card: AddCardType) {
        return instance.post<any, AxiosResponse<AdditionalCardResponse & Pick<CardResponses, 'newCard'>>, AddCardType>('cards/card', card)
    },
    delCard(id: string) {
        return instance.delete<any, AxiosResponse<AdditionalCardResponse & Pick<CardResponses, 'deletedCard'>>>(`cards/card?id=${id}`)
    },
    updateCard(card: UpdateCardType) {
        return instance.put<any, AxiosResponse<AdditionalCardResponse & Pick<CardResponses, 'updatedCard'>>, UpdateCardType>(`cards/card`, card)
    },
    rate(payload: RateType) {
        return instance.put<any, AxiosResponse<RateResponseType>,RateType>(`cards/grade`, payload).then(res => res.data.updatedGrade.grade)
    }
}

