import React from "react";
import { PackType } from "../p-3-api/packsAPI";
import { Pack } from "./pack/Pack";

import s from "./tableStyle.module.scss" 

export type PackTableRowType = {
    packs: PackType[]
}

export const PackTableRow: React.FC<PackTableRowType> = React.memo(({packs}) => {
    return <>
        {
            packs.map(pack => <Pack key={pack._id} pack={pack}/>)
        }
    </>
})