
import React from "react";
import ReactDOM  from "react-dom";

import gnel from "../../s-1-main/app/style/gnel.module.scss"
import text from "../../s-1-main/app/style/text.module.scss"
import s from "./../style/modalWindow.module.scss"

export type ModalType = {
    onClickClose: () => void
    open: boolean
    modStyle?: React.CSSProperties
}

export const Modal: React.FC<ModalType> = React.memo(({
    onClickClose, open, children, modStyle
}) => {
    if (!open){
        return null
    }
    return ReactDOM.createPortal(
        <aside className={s.modal_bg}>
            <div style={{...modStyle}} className={s.modal_window}>
                <button className={`${gnel.btn} ${s.modal_close} ${text.fs14_400}`} onClick={onClickClose}>X</button>
                {children}
            </div>
        </aside>, document.body)
})