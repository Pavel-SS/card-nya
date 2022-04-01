import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


// extansion Button for the future
type ButtonPropsType =  DefaultButtonPropsType

export const ButtonNya: React.FC<ButtonPropsType> = ({...props}) => {
    return <button {...props}/>
}