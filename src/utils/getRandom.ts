import { CardType } from "../s-2-features/f-4-cards/c-3-api/cardsAPI";

export const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

export const getRandomeCards = (cards: CardType[]) => {
    const possibility = cards.map(({grade}) => (6 - grade) ** 2)
    const randomeNum = getRandom(0, possibility.reduce((a,i) => a + i))
    let res = 0
    let index = 0
    possibility.some((s,i)=>{
        res += s
        if(res >= randomeNum) {
            index = i
            return true
        }
        return false
    })
    return cards[index]
}