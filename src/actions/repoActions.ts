import axios from "axios";
import {setAccountDetails, setFetchingError, setRepos} from "@/store/reposReducer";
import {AppDispatch} from "@/store";

export const getUserPublicRepos = (searchQuery = "WelderTIG"): any => {
    if (searchQuery == "") {
        searchQuery = "WelderTIG"
    }
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${searchQuery}/repos`);
            dispatch(setRepos(response.data));
            dispatch(setFetchingError(false))
        } catch (e) {
            dispatch(setFetchingError(true))
        }
    }
}
export const getAccountDetails = (searchQuery = "WelderTIG"): any => {
    if (searchQuery == "") {
        searchQuery = "WelderTIG"
    }
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
            dispatch(setAccountDetails(response.data));
            dispatch(setFetchingError(false))
        } catch (e) {
            dispatch(setFetchingError(true))
        }
    }
}