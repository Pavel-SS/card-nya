import { Slider } from "@mui/material"
import React, { useState } from "react"

type DoubleRangeType = {
    onChangeRange?:(value:[number,number] | number[]) => void
    value?: [number, number]
    min?: number
    max?: number
}
const minDistance = 10;

export const DoubleRange: React.FC<DoubleRangeType> = React.memo(({
    onChangeRange,
    value,
    min,
    max,
    ...props
}) => {
    const minMax = [0,103]
    const [range, setRange] = useState<number[]>(value ? value : minMax)

    const handleChange = (
        event: Event, 
        newValue: number | number [], 
        activeThumb: number) => {
            if (!Array.isArray(newValue)){
                return;
            }
            if (activeThumb === 0){
                setRange([Math.min(newValue[0], range[1] - minDistance), range[1]])
            } else {
                setRange([range[0], Math.max(newValue[1], range[0] + minDistance)])
            }
            onChangeCallback(newValue as number[])
    }
    const onChangeCallback = (arr: number[]) => {
        onChangeRange && onChangeRange(arr)
    }

    return(
        <>
            <Slider
                getAriaLabel={()=> 'My range'}
                value = {value ? value : range}
                onChange = {handleChange}
                valueLabelDisplay='auto'
                min={minMax[0]}
                max={minMax[1]}
                {...props}
            />
        </>
    )
})