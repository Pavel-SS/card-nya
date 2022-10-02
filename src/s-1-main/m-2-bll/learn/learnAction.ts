import { InferActionType } from '../action';
import { CardType } from '../../../s-2-features/f-4-cards/c-3-api/cardsAPI';

export const learnActions = {
    setCards: (cards: CardType[]) => ({type: 'learn/SET_CARDS', payload: {cards}} as const),
    setRandomCard: (randomCards: CardType) => ({type: 'learn/SET_RANDOM_CARD', payload: {randomCards}} as const),
    setGrade: (cardId: string, grade: number) => ({type: 'learn/SET_GRADE', payload: {cardId, grade}} as const)
}

export type LearnActionsType = InferActionType<typeof learnActions>