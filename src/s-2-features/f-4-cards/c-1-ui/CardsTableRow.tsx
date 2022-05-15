import React from "react"
import { CardType } from "../c-3-api/cardsAPI"
import { Card } from "./Card"

export type CardsTableRowType = {
    card: CardType[]
}
export const CardsTableRow: React.FC<CardsTableRowType> = React.memo(({card}) => {
    return (
        <>{card.map(item => <Card key={item._id} card={item}/>)}</>
    )
})