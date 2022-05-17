import { InferActionType } from './../../../../s-1-main/m-2-bll/action';
import { CardType } from '../../../f-4-cards/c-3-api/cardsAPI';

export const learnActions = {
    setCards: (cards: CardType[]) => ({type: 'learn/SET_CARDS', payload: {cards}} as const),
    setRandome: (randomCards: CardType) => ({type: 'learn/SET_RANDOME_CARDS', payload: {randomCards}} as const),
    setGrade: (id: string, grade: number) => ({type: 'learn/SET_GRADE', payload: {id, grade}} as const)
}

export type LearnActionsType = InferActionType<typeof learnActions>