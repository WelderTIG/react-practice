import axios from "axios";
import {setAccountDetails, setFetchingError, setRepos} from "../store/reposReducer";

export const getUserPublicRepos = (searchQuery = "WelderTIG") => {
    if (searchQuery == "") {
        searchQuery = "WelderTIG"
    }
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${searchQuery}/repos`);
            dispatch(setRepos(response.data));
            dispatch(setFetchingError(false))
        } catch (e) {
            dispatch(setFetchingError(true))
        }
    }
}
export const getAccountDetails = (searchQuery = "WelderTIG") => {
    if (searchQuery == "") {
        searchQuery = "WelderTIG"
    }
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
            dispatch(setAccountDetails(response.data));
            dispatch(setFetchingError(false))
        } catch (e) {
            dispatch(setFetchingError(true))
        }
    }
}