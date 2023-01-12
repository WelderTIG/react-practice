import {ethersProvider} from "@/components/App";
import {setLastBlockInfo, setTransactions} from '@/store/blockchainReducer';
import {prepareBlockInfo} from "@/utils/BlockInfo";
import {AppDispatch} from "@/store";

export const getLastBlockAndTransactions = (): any => {
    return async (dispatch: AppDispatch) => {
        const block = await ethersProvider.getBlockNumber()
        const blockInfo = await ethersProvider.getBlockWithTransactions(block)
        dispatch(setLastBlockInfo(prepareBlockInfo(blockInfo)))
        dispatch(setTransactions(blockInfo.transactions))
    }
}