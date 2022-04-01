import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType 
// & {
//     onChangeChecked?: (checked: boolean) => void
//     spanClassName?: string
// }

export const CheckboxNya: React.FC<SuperCheckboxPropsType> = (
    {
        ...restProps
    }
) => {
    return (
        <label>
            <input
                type={'checkbox'}
                {...restProps}
            />
        </label> 
    )
}
