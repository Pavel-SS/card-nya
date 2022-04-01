import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";


export type LinkNyaPropsType = NavLinkProps;

export const LinkNya: React.FC<LinkNyaPropsType> = React.memo((
    {
        ...props
    }
) => {
    return <NavLink {...props}/>;
});
