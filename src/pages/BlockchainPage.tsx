import React from 'react';
import { TransactionList, Metamask } from "@/components";
import { page } from "@/styles"

const BlockchainPage = () => {
    return (
        <div className={page.container}>
            <Metamask/>
            <TransactionList/>
        </div>
    );
};

export default BlockchainPage;