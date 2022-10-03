import s from './Preloader.module.scss'

export const Preloader = () => {
    return(
    <div className={s.spinner_box}>
        <div className={s.configure_border1}>
            <div className={s.configure_core}></div>
        </div>
        <div className={s.configure_border2}>
            <div className={s.configure_core}></div>
        </div>
    </div>
    )
}