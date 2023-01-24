declare global {
    interface Window{
        ethereum?:any
    }
}
export interface ResponseGenerator {
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export interface ISearchQueryAction {
    type?: string,
    searchQuery?: string,
}
