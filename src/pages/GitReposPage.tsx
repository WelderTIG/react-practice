import React from 'react';
import RepoList from "@/components/repoList/RepoList";
import GitAccount from "@/components/gitAccount/GitAccount";
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