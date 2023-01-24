import React, {useEffect, useState} from 'react';
import cl from "./gitAccount.module.css"
import { rootStore } from '@/store';
import { observer } from 'mobx-react-lite';


const GitAccount = observer(() => {
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        rootStore.repoStore.getAccountDetails("")
    }, [])

    function searchHandler() {
        rootStore.repoStore.getAccountDetails(searchValue);
    }

    return (
        <div className={cl.container}>
            <h1 >Account</h1>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="test" placeholder="Input account name"/>
            <button onClick={() => searchHandler()}>Get repos</button>
            <div>
                <p key="login">Login: {rootStore.repoStore.accDetails["login"]}</p>
                <p key="id">Id: {rootStore.repoStore.accDetails["id"]}</p>
                <p key="created_at">Registration date: {rootStore.repoStore.accDetails["created_at"]}</p>
                <p key="updated_at">Last commit date: {rootStore.repoStore.accDetails["updated_at"]}</p>
            </div>
        </div>
    );
});

export default GitAccount;