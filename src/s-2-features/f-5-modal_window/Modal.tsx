import React from "react";
import ReactDOM  from "react-dom";


export type ModalType = {
    onClickModalWindow: () => void
    open: boolean
}

export const Modal: React.FC<ModalType> = React.memo(({
    onClickModalWindow, open, children
}) => {
    if (!open){
        return null
    }
    return ReactDOM.createPortal(
        <aside>
            <div>
                <button onClick={onClickModalWindow}>X</button>
                {children}
            </div>
        </aside>, document.body)
})