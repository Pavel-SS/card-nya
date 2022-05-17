import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type RadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Radio: React.FC<RadioPropsType> = React.memo(({
    type,
    name,
    options,
    value,
    onChange,
    onChangeOption,
    ...props
})=>{

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const mappedOptions: any[] = options ? options.map((o,i) => {
        <label key = {name + '-' + i}> 
            <input 
                type={'radio'} 
                name = {name}
                checked = {o === value}
                value = {o}
                onChange = {onChangeCallback}
                {...props}  
            />
            <span>{o}</span>
        </label>
    }): []

    return(
        <>
         {mappedOptions}
        </>
    )
})