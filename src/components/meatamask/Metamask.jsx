import React, {useEffect} from 'react';
import {getLastBlockAndTransactions} from "../../actions/blockchainActions";
import {useDispatch, useSelector} from "react-redux";
import cl from "./metamask.module.css";

const Metamask = () => {
    const dispatch = useDispatch()
    const lastBlockInfo = useSelector(state => state.blockchain.lastBlockInfo)

    useEffect(() => {
        dispatch(getLastBlockAndTransactions())
    }, [])

    return (
        <div className={cl.container}>
            <h3>LastBlock info</h3>
            <div>
                <p>BlockHash: {lastBlockInfo.hash}</p>
                <p>BlockNumber: {lastBlockInfo.number}</p>
                <p>ParentBlockHash: {lastBlockInfo.parentHash}</p>
                <p>Timestamp: {lastBlockInfo.timestamp}</p>
                <p>TxCount: {lastBlockInfo.txCount}</p>
            </div>
        </div>
    );
};

export default Metamask;