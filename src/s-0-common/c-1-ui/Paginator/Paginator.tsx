import React from "react"
import { getPages } from "../../../utils/getPages"
import { Select } from "../Select/Select"

export type PaginatorPropsType = {
    changingNumberOfRenderedElements: (elem: number) => void
    changePage: (page: number) => void
    totalElementCount: number
    page: number
    pageCount: number
}

const elemInPage = [5, 10, 20, 30];

export const Paginator: React.FC<PaginatorPropsType> = React.memo(({
    changingNumberOfRenderedElements,
    changePage,
    totalElementCount,
    page,
    pageCount,
}) => {

    const pages = []
    const pagesCount = Math.ceil(totalElementCount / pageCount)
    for(let i = 1; i<= pagesCount; i+=1){
        pages.push(i)
    }

    const renderPages = getPages(pages, page, pagesCount)

    const onClickChangePage = (page: number) => {
        changePage(page)
    }

    return(
        totalElementCount ?
        <>
            <>
            <div>
                {
                    page > 3 && pagesCount > 5 && (
                        <>
                           <button onClick={()=> onClickChangePage(page - 1)}>{'<-'}</button> 
                           <button onClick={() => onClickChangePage(1)}>1</button>
                           <span>...</span>
                        </>
                    )
                }
            </div>
            <div>
                {
                    renderPages.map(item => (
                       <button onClick={() => onClickChangePage(item)} key={item}>
                           {item}
                        </button> 
                    ))
                }
            </div>
            <div>
                {
                    page < pages.length - 2 && pagesCount > 5 && (
                        <>
                            <span>...</span>
                            <button onClick={() => onClickChangePage(pages.length)}>
                                {pages.length}
                            </button>
                            <button onClick={() => onClickChangePage(page + 1)}>
                                {'->'}
                            </button>
                        </>
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
            </>
        </> :
        <div>Empty Paginator</div>
    )
})