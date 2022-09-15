import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { selectPackMaxCardsCount, selectPackMinCardsCount } from "../../../s-1-main/m-2-bll/selectors";
import { useAppSelector } from "../../../s-1-main/m-2-bll/store";
import { packsActions } from "../../../s-2-features/f-3-packs/p-2-bll/packsActions";
import { DoubleRange } from "./DoubleRange";

export const DoubleRangePacks = () => {
    const minCardsInPack = useAppSelector(selectPackMinCardsCount),
          maxCardsInPack = useAppSelector(selectPackMaxCardsCount);

    const dispatch = useDispatch();

    const [minAmount, setMinAmount] = useState(minCardsInPack);
    const [maxAmount, setMaxAmount] = useState(maxCardsInPack);
    const [timeId, setTimeId] = useState<number>(0);

    const changeAmount = useCallback((value: [number,number] | number[])=>{
        const distance = 10;
        const range = [minAmount,maxAmount];
        setMinAmount(Math.min(value[0], range[1] - distance))
        setMaxAmount(Math.max(value[1], range[0] + distance))
        clearTimeout(timeId)
        const id = +setTimeout(() => {
            dispatch(packsActions.setPacksMin((value[0])))
            dispatch(packsActions.setPacksMax(value[1]))
        }, 1000)
           setTimeId(id) 
    }, [dispatch, timeId])
    return (
        <>
            <DoubleRange
                value={[minAmount,maxAmount]}
                onChangeRange={changeAmount} 
                min = {minCardsInPack}
                max = {maxCardsInPack}   
            />
        </>
    )
}