import React from 'react';
import { ITransactionProps } from "@/interfaces";
import cl from "./transaction.module.css";

const Transaction: React.FunctionComponent<ITransactionProps> = ({tx}: ITransactionProps) => {
    return (
        <div className={cl.tx}>
            <a href={`https://etherscan.io/tx/${tx.hash}`} target="_blank">TxId: {tx.hash}</a>
            <p>Sender: {tx.from}</p>
        </div>
    );
};

export default Transaction;