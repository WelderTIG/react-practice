import React, { useEffect } from 'react';
import cl from "./metamask.module.css";
import { useRootStore } from '@/components';
import { observer } from 'mobx-react-lite';

const Metamask = observer(() => {
    const {blockStore} = useRootStore()

    useEffect(() => {
        blockStore.getLastBlockAndTransactions()
    }, [])

    return (
        <div className={cl.container}>
            <h3>LastBlock info</h3>
            <div>
                <p>BlockHash: {blockStore.lastBlockInfo.hash}</p>
                <p>BlockNumber: {blockStore.lastBlockInfo.number}</p>
                <p>ParentBlockHash: {blockStore.lastBlockInfo.parentHash}</p>
                <p>Timestamp: {blockStore.lastBlockInfo.timestamp}</p>
                <p>TxCount: {blockStore.lastBlockInfo.txCount}</p>
            </div>
        </div>
    );
});

export default Metamask;