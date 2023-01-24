import React from 'react';
import { Transaction } from "@/components";
import { useAppSelector } from "@/hooks";
import { ITransaction } from "@/interfaces";
import cl from "./transactionList.module.css";

const TransactionList = () => {
    const transactions = useAppSelector(state => state.blockchain.transactions)

    return (
        <div className={cl.container}>
            {transactions.map((tx: ITransaction, index: number) =>
                <Transaction key={index} tx={tx}/>
            )}
        </div>
    );
};

export default TransactionList;