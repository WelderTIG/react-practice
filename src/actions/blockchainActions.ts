import { ethersProvider } from "@/components";
import { AppDispatch, setLastBlockInfo, setTransactions } from '@/store';
import { prepareBlockInfo } from "@/utils";

export const getLastBlockAndTransactions = (): any => {
    return async (dispatch: AppDispatch) => {
        const block = await ethersProvider.getBlockNumber()
        const blockInfo = await ethersProvider.getBlockWithTransactions(block)
        dispatch(setLastBlockInfo(prepareBlockInfo(blockInfo)))
        dispatch(setTransactions(blockInfo.transactions))
    }
}