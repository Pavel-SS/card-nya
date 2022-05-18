import React from "react"
import { getPages } from "../../../utils/getPages"
import { Select } from "../Select/Select"

export type PaginatorPropstype = {
    page: number
    pageCount: number
    totalElementCount: number
    changingNumberOfRenderedElements: (elem: number) => void
    changePage: (page: number) => void
}

const elemInPage = [5, 10, 15, 20, 25, 30];

export const Paginator: React.FC<PaginatorPropstype> = React.memo(({
    page,
    pageCount,
    totalElementCount,
    changingNumberOfRenderedElements,
    changePage
}) => {

    const pages = []
    const pagesCount = Math.ceil(totalElementCount / pageCount)

    for(let i = 1; i<= pagesCount; i++){
        pages.push(i)
    }

    const renderPages = getPages(pages, page, pagesCount)

   const onClickChangePage = (page: number) => {
        changePage(page)
    }

    return(
        totalElementCount ?
        <>
            <div>
                {
                    page > 3 && pagesCount > 5 && (
                        <div>
                           <button onClick={()=> onClickChangePage(page - 1)}>{'<-'}</button> 
                           <button onClick={() => onClickChangePage(1)}>1</button>
                           <span>...</span>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    renderPages.map(item => (
                       <button onClick={() => onClickChangePage(pages.length)}>
                           {item}
                        </button> 
                    ))
                }
            </div>
            <div>
                {
                    page < pages.length - 2 && pagesCount > 5 && (
                        <div>
                            <span>...</span>
                            <button onClick={() => {onClickChangePage(pages.length)}}>
                                {pages.length}
                            </button>
                            <button onClick={() => {onClickChangePage(page + 1)}}>
                                {'->'}
                            </button>
                        </div>
                    )
                }
            </div>
            <div>
                <span>Show</span>
                <Select 
                    options = {elemInPage}
                    value = {pageCount}
                    onChangeOption = { changingNumberOfRenderedElements }
                />
            </div>
        </> :
        <div>Empty Paginator</div>
    )
})