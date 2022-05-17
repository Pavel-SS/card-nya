import React, { useCallback, useState } from "react"
import { Button } from "../Buttons/Button"
import { InputText } from "../InputText/InputText"


type SearchPropsType = {
    onRechenge: (title: string) => void
    value: string
    placeholder?: string
}

export const SearchPanel: React.FC<SearchPropsType> = React.memo(({
    onRechenge,
    value,
    placeholder
}) => {
    const [title, setTitle] = useState<string>(value)
    const [timerID, setTimerID] = useState<number>(0)

    const onChangeText = useCallback((title: string) => {
        const id: number = +setTimeout(onRechenge, 500, title)
        setTitle(title)
        clearTimeout(timerID)
        setTimerID(id)
    },[onRechenge, timerID])

    return(
        <>
            <InputText
                value={title}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
            <Button onClick={()=> onChangeText('')}>
                X
            </Button>
        </>
    )
})