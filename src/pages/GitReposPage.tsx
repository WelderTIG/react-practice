import React from 'react';
import { GitAccount, RepoList } from "@/components";
import { page } from "@/styles"

const GitReposPage = () => {
    return (
        <div className={page.container}>
            <GitAccount/>
            <RepoList />
        </div>
    );
};

export default GitReposPage;