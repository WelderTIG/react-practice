import {IAccountDetails, IDefaultReposState, IRepo} from "@/interfaces";
import {AnyAction} from "redux";

const SET_ACCOUNT_DETAILS = "SET_ACCOUNT_DETAILS"
const SET_REPOS = "SET_REPOS"
const SET_FETCHING_ERROR = "SET_FETCHING_ERROR"

const defaultState = {
    accountDetails: <IAccountDetails>{},
    items: <IRepo[]>[],
    isFetchingError: false
}
export default function reposReducer(state: IDefaultReposState = defaultState, action: AnyAction) {
    switch (action.type) {
        case SET_ACCOUNT_DETAILS:
            return {
                ...state,
                accountDetails: action.payload
            }
        case SET_REPOS:
            return {
                ...state,
                items: action.payload
            }
        case SET_FETCHING_ERROR:
            return {
                ...state,
                isFetchingError: action.payload
            }
        default:
            return state;
    }
}

export const setAccountDetails = (accountDetails: IAccountDetails) => ({type: SET_ACCOUNT_DETAILS, payload: accountDetails})
export const setRepos = (repos: IRepo[]) => ({type: SET_REPOS, payload: repos})
export const setFetchingError = (bool: boolean) => ({type: SET_FETCHING_ERROR, payload: bool})