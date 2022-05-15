import { InferActionType } from '../../../s-1-main/m-2-bll/action';
import { CardType } from './../c-3-api/cardsAPI';

export const cardsActions = {
    setCards: (cards: CardType[]) => ({ type: 'cards/SET_CARDS', payload: {cards}} as const),
    setCardsID: (id: string) => ({type: 'cards/SET_CARDS_ID', payload: {id}} as const),
    setCardsName: (name: string) => ({type: 'cards/SET_CARDS_NAME', payload: {name}} as const),
    setCardsCount: (cardsCount: number) => ({type: 'cards/SET_CARDS_COUNT', payload: {cardsCount}} as const),
    setCardsPageCount: (cardsPageCount: number) => ({type: 'cards/SET_CARDS_PAGE_COUNT', payload: {cardsPageCount}} as const),
    setCurrentPage: (page: number) => ({type: 'cards/SET_CURRENT_PAGE', payload: {page}} as const),
    setAnswer: (cardAnswer: string) => ({type: 'CARDS/SET_ANSWER_SEARCH', payload: {cardAnswer}} as const),
    setQuestion: (cardQuestion: string) => ({type: 'CARDS/SET_QUESTION_SEARCH', payload: {cardQuestion}} as const),
    setSortParameters: (sortCards: string) => ({type: 'CARDS/SET_SORT_PARAMETERS', payload: {sortCards}} as const)
}

export type CardsActionTypes = InferActionType<typeof cardsActions>
