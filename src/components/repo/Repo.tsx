import React from 'react';
import { IRepoProps } from "@/interfaces";
import { listItem } from "@/styles";

const Repo: React.FunctionComponent<IRepoProps> = ({repo}: IRepoProps) => {
    return (
        <div className={listItem.listItem}>
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