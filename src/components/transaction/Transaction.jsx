import React from 'react';
import "./tx.css"

const Transaction = ({hash, from}) => {
    return (
        <div className="tx">
            <a href={`https://etherscan.io/tx/${hash}`} target="_blank">TxId: {hash}</a>
            <p>Sender: {from}</p>
        </div>
    );
};

export default Transaction;