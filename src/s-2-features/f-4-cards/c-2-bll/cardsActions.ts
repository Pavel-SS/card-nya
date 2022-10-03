import { InferActionType } from '../../../s-1-main/m-2-bll/action';
import { CardType } from './../c-3-api/cardsAPI';

export const cardsActions = {
    setCards: (cards: CardType[]) => ({ type: 'cards/SET_CARDS', payload: {cards}} as const),
    setCardsID: (cardsPack_id: string) => ({type: 'cards/SET_CARDS_ID', payload: {cardsPack_id}} as const),
    setCardsName: (packName: string) => ({type: 'cards/SET_CARDS_NAME', payload: {packName}} as const),
    setCardsCount: (cardsTotalCount: number) => ({type: 'cards/SET_CARDS_COUNT', payload: {cardsTotalCount}} as const),
    setCardsPageCount: (pageCount: number) => ({type: 'cards/SET_CARDS_PAGE_COUNT', payload: {pageCount}} as const),
    setCurrentPage: (page: number) => ({type: 'cards/SET_CURRENT_PAGE', payload: {page}} as const),
    setAnswer: (cardAnswer: string) => ({type: 'cards/SET_ANSWER_SEARCH', payload: {cardAnswer}} as const),
    setQuestion: (cardQuestion: string) => ({type: 'cards/SET_QUESTION_SEARCH', payload: {cardQuestion}} as const),
    setSortParameters: (sortCards: string) => ({type: 'cards/SET_SORT_PARAMETERS', payload: {sortCards}} as const)
}

export type CardsActionTypes = InferActionType<typeof cardsActions>
