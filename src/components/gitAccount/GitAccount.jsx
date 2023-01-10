import React, {useEffect, useState} from 'react';
import cl from "./GitAccount.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getAccountDetails, getUserPublicRepos} from "../../actions/repoActions";
import {Link} from "react-router-dom";
const GitAccount = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")
    const accountDetails = useSelector(state => state.repos.accountDetails)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])
    function searchHandler() {
        dispatch(getUserPublicRepos(searchValue))
        dispatch((getAccountDetails(searchValue)))
    }

    return (
        <div className={cl.container}>
            <h1 >Account</h1>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="test" placeholder="Input account name"/>
            <button onClick={()=> searchHandler()}>Get repos</button>
            <div>
                <p key="login">Login: {accountDetails["login"]}</p>
                <p key="id">Id: {accountDetails["id"]}</p>
                <p key="created_at">Registration date: {accountDetails["created_at"]}</p>
                <p key="updated_at">Last commit date: {accountDetails["updated_at"]}</p>
            </div>
        </div>
    );
};

export default GitAccount;