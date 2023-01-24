import React from 'react';
import { TransactionList, Metamask } from "@/components";
import cl from "./page.module.css"

const BlockchainPage = () => {
    return (
        <div className={cl.container}>
            <Metamask/>
            <TransactionList/>
        </div>
    );
};

export default BlockchainPage;