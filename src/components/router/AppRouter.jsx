import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/pages/HomePage";
import GitReposPage from "@/pages/GitReposPage";
import BlockchainPage from "@/pages/BlockchainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import "@/index.css"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="git-repos" element={<GitReposPage />}/>
                    <Route path="blockchain" element={<BlockchainPage />}/>
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;