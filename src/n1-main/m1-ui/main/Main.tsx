import React from "react";
import { ButtonNya } from "../common/button/ButtonNya";
import { CheckboxNya } from "../common/checkbox/CheckboxNya";
import { InputNya } from "../common/input/InputNya";


export const Main = () => {
    return (
        <main>
            <ButtonNya >
                Button
            </ButtonNya>

            <CheckboxNya/>
            <InputNya/>
        </main>  
    );
};

