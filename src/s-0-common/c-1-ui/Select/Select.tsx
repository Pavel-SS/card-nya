import React, { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes } from "react"


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select: React.FC<SelectPropsType> = React.memo((
    {
        options,
        onChange, onChangeOption,
        ...props
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option value={o} key={i}>{o}</option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <div>
            <select onChange={onChangeCallback} {...props}>
                {mappedOptions}
            </select>
        </div>
    )
})