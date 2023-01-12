import React from 'react';
import cl from "./repo.module.css"
import {IRepoProps} from "@/interfaces";

const Repo: React.FunctionComponent<IRepoProps> = ({repo}: IRepoProps) => {
    return (
        <div className={cl.container}>
            <div>
                <div>Name: {repo.name}</div>
                <div>Stars: {repo.stargazers_count}</div>
            </div>
            <div>Last commit: {repo.updated_at}</div>
            <a href={repo.html_url} >Link: {repo.html_url}</a>
        </div>
    );
};

export default Repo;