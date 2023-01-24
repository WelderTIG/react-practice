import React from 'react';
import { ethers } from "ethers";
import { AppRouter } from "@/components";


// Должен быть установлен в браузер екстеншн metamask
export const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

const App = () => {
    return (
        <AppRouter />
    );
};

export default App;