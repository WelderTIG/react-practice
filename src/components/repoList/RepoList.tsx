import React, {useEffect} from 'react';
import Repo from "@/components/repo/Repo";
import cl from "./repoList.module.css"
import {Link} from "react-router-dom";
import {IRepo} from "@/interfaces";
import {useAppDispatch, useAppSelector} from "@/hooks";
import { reposActionCreator, setRepos } from '@/store/reposReducer';

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