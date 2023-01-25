import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Repo } from "@/components";
import { IRepo } from "@/interfaces";
import { useRootStore } from '@/components';
import { observer } from 'mobx-react-lite';
import cl from "./repoList.module.css";

const RepoList = observer(() => {
    const {repoStore} = useRootStore()

    useEffect(() => {
        repoStore.getUserRepos("")
    }, [])
    
    if (repoStore.isFetchingError) {
        return <Link to="/">Wrong input</Link>
    }

    return (
        <div className={cl.container}>
            {repoStore.repos.map((repo: IRepo, index: number) =>
                <Repo key={index} repo={repo}/>
            )}
        </div>
    );
});

export default RepoList;