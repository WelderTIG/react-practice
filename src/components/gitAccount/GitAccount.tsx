import React, {useEffect, useState} from 'react';
import cl from "./gitAccount.module.css"
import {useAppDispatch, useAppSelector} from "@/hooks";
import { accountDetailsCreator, reposActionCreator } from '@/store/reposReducer';


const GitAccount = () => {
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState("")
    const accountDetails = useAppSelector(state => state.repos.accountDetails)

    useEffect(() => {
        dispatch(accountDetailsCreator(""))
    }, [])

    function searchHandler() {
        dispatch(accountDetailsCreator(searchValue))
        dispatch(reposActionCreator(searchValue))
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