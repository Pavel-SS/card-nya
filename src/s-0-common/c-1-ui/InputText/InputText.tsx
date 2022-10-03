import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState } from "react";

//импортируем стили
import s from "./inputText.module.scss"
import text from "../../../s-1-main/app/style/text.module.scss"

//типизация стандартного input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

//создаем свою типизацию  input, объединив стандартные (исключив type. Исключив возможность изменение типа input) со своими
type InputTextPropsType = Omit<DefaultInputPropsType,'type'> & {
    onChangeText?: (value: string)=> void,
    onEnterPress?: ()=> void,
    visibilityPassword?: boolean
}

export const InputText: React.FC<InputTextPropsType> = React.memo(({
    onChange,
    onChangeText,
    onKeyPress,
    onEnterPress,
    visibilityPassword,
    ...props
}) => {
    const [textOrPassword, setTextOrPassword] = useState<boolean>(!visibilityPassword);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>)=>{
        onKeyPress && onKeyPress(e);
        onEnterPress && e.key === 'Enter' && onEnterPress()
    }

    const hiddenPassword = () => {
        setTextOrPassword(!textOrPassword)
    }

    return (
        <div className={s.container}>
            <div className={s.container_items}>
                <input className={text.fs18_400} type={textOrPassword ? 'text' : 'password' } onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback} {...props} />
                {visibilityPassword &&
                <div onClick={hiddenPassword} className={textOrPassword ?`${s.eye} ${s.eye_open}` : `${s.eye}
                    ${s.eye_close}`}>
                </div>
                }
            </div> 
        </div>
    )
})