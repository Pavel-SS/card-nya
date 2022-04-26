import React from "react";
import { Route, Routes } from "react-router-dom";
import { pages, PagesType } from "./Pages";

const RoutesPagesList = pages.map((page:PagesType)=>{
    return (
        <Route key={'route-' + page._id}
            path={page.path && (page.path + (page.params || ''))}
            element = {page.page}

        />
    )
})

export const RouteFunc = () => {
    return ( 
        <Routes> 
            {RoutesPagesList} 
        </Routes>
    )
}