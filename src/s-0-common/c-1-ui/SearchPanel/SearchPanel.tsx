import React, { useCallback, useState } from "react"
import { Button } from "../Buttons/Button"
import { InputText } from "../InputText/InputText"

import style from "./searchPanel.module.scss"

type SearchPropsType = {
    onRechenge: (title: string) => void
    value: string
    placeholder?: string
}

export const SearchPanel: React.FC<SearchPropsType> = React.memo(({
    onRechenge,
    value,
    placeholder,
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
        <div className={style.search}>
            <InputText
                value={title}
                onChangeText={onChangeText}
                placeholder={placeholder}
                className={style.search__panel}
            />
            <Button onClick={()=> onChangeText('')}
                    className={style.search__btn}
            >
                X
            </Button>
        </div>
    )
})