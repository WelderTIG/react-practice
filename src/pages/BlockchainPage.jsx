import React from 'react';
import Metamask from "../components/meatamask/Metamask";
import TransactionList from "../components/transactionList/TransactionList";
import cl from "./Page.module.css"
const BlockchainPage = () => {
    return (
        <div className={cl.container}>
            <Metamask/>
            <TransactionList/>
        </div>
    );
};

export default BlockchainPage;