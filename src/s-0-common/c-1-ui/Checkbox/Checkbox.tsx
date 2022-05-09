import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"

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
        <label>
            <input 
                type={'checkbox'}
                onChange={onChangeCallback}
                {...props} 
            />
            <span>{children && children}</span>
        </label>
    )
})