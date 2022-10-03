import {useState, useCallback, useEffect} from "react";
import { Button } from "../Buttons/Button";

import s from "./BtnScroll.module.scss"

export const BtnScrol = () => {
    const [hiddenScroll, setHiddenScroll] = useState<boolean>(false);

    const scroll = useCallback(() => {
        if ( window.scrollY > 100 ) { 
            setHiddenScroll(true);
        } else {
            setHiddenScroll(false);
        }
    }, [])
    const scrollToFunc = (() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    })

    useEffect(() => {
        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, [scroll]);

    return (
        <>
            {
                hiddenScroll && <Button className={s.arrow} onClick={scrollToFunc}></Button>
            }
        </>
    )
}