import React, { useEffect } from 'react';
import { rootStore } from '@/store';
import cl from "./metamask.module.css";
import { observer } from 'mobx-react-lite';

const Metamask = observer(() => {

    useEffect(() => {
        rootStore.blockStore.getLastBlockAndTransactions()
    }, [])

    return (
        <div className={cl.container}>
            <h3>LastBlock info</h3>
            <div>
                <p>BlockHash: {rootStore.blockStore.lastBlockInfo.hash}</p>
                <p>BlockNumber: {rootStore.blockStore.lastBlockInfo.number}</p>
                <p>ParentBlockHash: {rootStore.blockStore.lastBlockInfo.parentHash}</p>
                <p>Timestamp: {rootStore.blockStore.lastBlockInfo.timestamp}</p>
                <p>TxCount: {rootStore.blockStore.lastBlockInfo.txCount}</p>
            </div>
        </div>
    );
});

export default Metamask;