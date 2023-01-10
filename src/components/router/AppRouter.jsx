import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import HomePage from "../../pages/HomePage";
import GitReposPage from "../../pages/GitReposPage";
import BlocksPage from "../../pages/BlocksPage";
import NotFoundPage from "../../pages/NotFoundPage";
import "../../index.css"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="git-repos" element={<GitReposPage />}/>
                    <Route path="blocks" element={<BlocksPage />}/>
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;