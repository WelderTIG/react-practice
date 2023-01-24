import React from 'react';
import { GitAccount, RepoList } from "@/components";
import cl from "./page.module.css"

const GitReposPage = () => {
    return (
        <div className={cl.container}>
            <GitAccount/>
            <RepoList />
        </div>
    );
};

export default GitReposPage;