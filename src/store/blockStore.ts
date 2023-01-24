
import { makeAutoObservable } from "mobx";
import { IBlockInfo, ITransaction } from "@/interfaces";
import { ethersProvider } from "@/components";
import { prepareBlockInfo } from "@/utils";

export default class BlockStore {
    lastBlockInfo: IBlockInfo = <IBlockInfo>{};
    transactions: ITransaction[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async getLastBlockAndTransactions() {
        const blockNumber = await ethersProvider.getBlockNumber();
        const blockInfo = await ethersProvider.getBlockWithTransactions(blockNumber);
        this.lastBlockInfo = prepareBlockInfo(blockInfo);
        this.transactions = blockInfo.transactions
    }
}