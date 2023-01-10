import React from 'react';
import AppRouter from "./router/AppRouter";
import {ethers} from "ethers";

export const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)

const App = () => {
    return (
        <AppRouter />
    );
};

export default App;