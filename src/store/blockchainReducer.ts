import {AnyAction} from "redux";
import {IBlockInfo, IDefaultBlockState, ILastBlockInfo, ITransaction} from "@/interfaces";

const SET_LAST_BLOCK_INFO = "SET_LAST_BLOCK_INFO"
const SET_TRANSACTIONS = "SET_TRANSACTIONS"

const defaultState = {
    lastBlockInfo: <ILastBlockInfo>{},
    transactions: <ITransaction[]>[],
}
export default function blockchainReducer(state: IDefaultBlockState = defaultState, action: AnyAction) {
    switch (action.type) {
        case SET_LAST_BLOCK_INFO:
            return {
                ...state,
                lastBlockInfo: action.payload
            }
        case SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            }
        default:
            return state;
    }
}
export const setLastBlockInfo = (preparedInfo: IBlockInfo) => ({type: SET_LAST_BLOCK_INFO, payload: preparedInfo})
export const setTransactions = (transactions: ITransaction[]) => ({type: SET_TRANSACTIONS, payload: transactions})