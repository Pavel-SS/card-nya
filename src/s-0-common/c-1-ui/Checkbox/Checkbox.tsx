import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"

import s from "./checkbox.module.scss" 

type DefaultCheckboxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CheckboxPropsType = DefaultCheckboxPropsType & {
    onChecked?: (checked: boolean) => void
}
export const Checkbox: React.FC<CheckboxPropsType> = React.memo((
    {
        type,
        onChange,
        onChecked,
        children,
        ...props
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChecked && onChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.container}>
            <input className={s.checkbox}
                type={'checkbox'}
                onChange={onChangeCallback}
                {...props} 
            />
            <span className={s.checkbox_txt}>{children && children}</span>
        </label>
    )
})