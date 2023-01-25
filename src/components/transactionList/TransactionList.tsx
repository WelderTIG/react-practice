import React from 'react';
import { Transaction } from "@/components";
import { ITransaction } from "@/interfaces";
import { useRootStore } from '@/components';
import cl from "./transactionList.module.css";
import { observer } from 'mobx-react-lite';

const TransactionList = observer(() => {
    const {blockStore} = useRootStore()

    return (
        <div className={cl.container}>
            {blockStore.transactions.map((tx: ITransaction, index: number) =>
                <Transaction key={index} tx={tx}/>
            )}
        </div>
    );
});

export default TransactionList;