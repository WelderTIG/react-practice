import React from 'react';
import cl from "./transaction.module.css"

const Transaction = ({hash, from}) => {
    return (
        <div className={cl.tx}>
            <a href={`https://etherscan.io/tx/${hash}`} target="_blank">TxId: {hash}</a>
            <p>Sender: {from}</p>
        </div>
    );
};

export default Transaction;