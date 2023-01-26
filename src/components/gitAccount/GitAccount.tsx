import React, {useEffect, useState} from 'react';
import { leftBlock } from "@/styles";
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/components';


const GitAccount = observer(() => {
    const [searchValue, setSearchValue] = useState("")
    const {repoStore} = useRootStore()

    useEffect(() => {
        repoStore.getAccountDetails("")
    }, [])

    function searchHandler() {
        repoStore.getAccountDetails(searchValue);
    }

    return (
        <div className={leftBlock.container}>
            <h1 >Account</h1>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="test" placeholder="Input account name"/>
            <button onClick={() => searchHandler()}>Get repos</button>
            <div>
                <p key="login">Login: {repoStore.accDetails["login"]}</p>
                <p key="id">Id: {repoStore.accDetails["id"]}</p>
                <p key="created_at">Registration date: {repoStore.accDetails["created_at"]}</p>
                <p key="updated_at">Last commit date: {repoStore.accDetails["updated_at"]}</p>
            </div>
        </div>
    );
});

export default GitAccount;