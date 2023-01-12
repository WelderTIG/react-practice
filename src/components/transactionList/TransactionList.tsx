import React from 'react';
import cl from "./transactionList.module.css";
import Transaction from "@/components/transaction/Transaction";
import {useAppSelector} from "@/hooks";
import {ITransaction} from "@/interfaces";

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