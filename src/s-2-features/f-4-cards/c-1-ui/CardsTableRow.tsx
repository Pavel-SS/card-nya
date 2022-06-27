import React from "react"
import { CardType } from "../c-3-api/cardsAPI"
import { Card } from "./card/Card"

export type CardsTableRowType = {
    cards: CardType[]
}
export const CardsTableRow: React.FC<CardsTableRowType> = React.memo(({cards}) => {
    return (
        <>{cards.map(item => <Card key={item._id} card={item}/>)}</>
    )
})