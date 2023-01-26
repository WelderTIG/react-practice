import React from 'react';
import { ITransactionProps } from "@/interfaces";
import { listItem } from "@/styles";

const Transaction: React.FunctionComponent<ITransactionProps> = ({tx}: ITransactionProps) => {
    return (
        <div className={listItem.listItem}>
            <a href={`https://etherscan.io/tx/${tx.hash}`} target="_blank">TxId: {tx.hash}</a>
            <p>Sender: {tx.from}</p>
        </div>
    );
};

export default Transaction;