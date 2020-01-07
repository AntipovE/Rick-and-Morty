import {parse} from 'query-string'


export const pageSet = search =>{
    const pageParse =parse(search)
    const currentPage = pageParse.page? Number(pageParse.page) : 1
    return{currentPage}
}