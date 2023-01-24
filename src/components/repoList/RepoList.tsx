import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Repo } from "@/components";
import { IRepo } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { reposActionCreator } from '@/store';
import cl from "./repoList.module.css";

const RepoList = () => {
    const dispatch = useAppDispatch()
    const repos = useAppSelector(state => state.repos.items)
    const isFetchingError = useAppSelector(state => state.repos.isFetchingError)

    useEffect(() => {
        dispatch(reposActionCreator(""))
    }, [])
    

    if (isFetchingError) {
        return <Link to="/">Wrong input</Link>
    }
    return (
        <div className={cl.container}>
            {repos.map((repo: IRepo, index: number) =>
                <Repo key={index} repo={repo}/>
            )}
        </div>
    );
};

export default RepoList;