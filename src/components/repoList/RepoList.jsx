import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getUserPublicRepos} from "../../actions/repoActions";
import Repo from "../repo/Repo";
import cl from "./RepoList.module.css"
import {Link} from "react-router-dom";
const RepoList = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetchingError = useSelector(state => state.repos.isFetchingError)

    useEffect(() => {
        dispatch(getUserPublicRepos())
    }, [])

    if (isFetchingError) {
        return <Link to="/">Wrong input</Link>
    }
    return (
        <div className={cl.container}>
            {repos.map((repo, index) =>
                <Repo key={index} repo={repo}/>
            )}
        </div>
    );
};

export default RepoList;