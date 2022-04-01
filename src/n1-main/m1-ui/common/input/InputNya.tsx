import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType
//  & 
// { // и + ещё пропсы которых нет в стандартном инпуте
//     onChangeText?: (value: string) => void
//     onEnter?: () => void
//     error?: string
//     spanClassName?: string
//     className?: string
// }

export const InputNya: React.FC<SuperInputTextPropsType> = (
    {
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    return (
        <>
            <input
                type={'text'}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}