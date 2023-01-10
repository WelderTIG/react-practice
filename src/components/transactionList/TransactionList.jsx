import React from 'react';
import cl from "../repoList/RepoList.module.css";
import {useSelector} from "react-redux";
import Transaction from "../transaction/Transaction";

const TransactionList = () => {
    const transactions = useSelector(state => state.blockchain.transactions)

    return (
        <div className={cl.container}>
            {transactions.map((tx, index) =>
                <Transaction key={index} hash={tx.hash} from={tx.from}/>
            )}
        </div>
    );
};

export default TransactionList;