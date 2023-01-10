import {ethersProvider} from "../components/App";
import {setLastBlockInfo, setTransactions} from "../store/blockchainReducer";
import {prepareBlockInfo} from "../utils/BlockInfo";

export const getLastBlockAndTransactions = () => {
    return async (dispatch) => {
        const block = await ethersProvider.getBlockNumber()
        const blockInfo = await ethersProvider.getBlockWithTransactions(block)
        dispatch(setLastBlockInfo(prepareBlockInfo(blockInfo)))
        dispatch(setTransactions(blockInfo.transactions))
    }
}