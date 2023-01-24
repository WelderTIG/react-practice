import React from 'react';
import { Transaction } from "@/components";
import { ITransaction } from "@/interfaces";
import { rootStore } from '@/store';
import cl from "./transactionList.module.css";
import { observer } from 'mobx-react-lite';

const TransactionList = observer(() => {

    return (
        <div className={cl.container}>
            {rootStore.blockStore.transactions.map((tx: ITransaction, index: number) =>
                <Transaction key={index} tx={tx}/>
            )}
        </div>
    );
});

export default TransactionList;