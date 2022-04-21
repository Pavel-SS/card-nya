import React from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "./Pages";

const RoutesPagesList = pages.map(page=>{
    return (
        <Route key={'route-' + page._id}
            path={page.path || ''}
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