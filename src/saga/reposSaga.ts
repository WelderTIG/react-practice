import { ISearchQueryAction, ResponseGenerator } from "@/interfaces";
import { setAccountDetails, setRepos, SET_ACCOUNT_DETAILS_ASYNC_ACTION, SET_REPOS_ASYNC_ACTION } from "@/store/reposReducer";
import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


export function* userPublicReposWorker(e: ISearchQueryAction) {
    if (e.searchQuery == "") {
        e.searchQuery = "WelderTIG"
    }

    const promise: ResponseGenerator = yield axios.get(`https://api.github.com/users/${e.searchQuery}/repos`)
    yield put(setRepos(promise.data))
}

export function* accountDetailsWorker(e: ISearchQueryAction) {
    if (e.searchQuery == "") {
        e.searchQuery = "WelderTIG"
    }
    
    const promise: ResponseGenerator = yield axios.get(`https://api.github.com/users/${e.searchQuery}`)
    yield put(setAccountDetails(promise.data))
}

export function* rootWatcher() {
    yield takeEvery(SET_REPOS_ASYNC_ACTION, userPublicReposWorker)
    yield takeEvery(SET_ACCOUNT_DETAILS_ASYNC_ACTION, accountDetailsWorker)
}