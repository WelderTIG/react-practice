const SET_LAST_BLOCK_INFO = "SET_LAST_BLOCK_INFO"
const SET_TRANSACTIONS = "SET_TRANSACTIONS"

const defaultState = {
    lastBlockInfo: {},
    transactions: [],
}
export default function blockchainReducer(state = defaultState, action) {
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
export const setLastBlockInfo = (preparedInfo) => ({type: SET_LAST_BLOCK_INFO, payload: preparedInfo})
export const setTransactions = (transactions) => ({type: SET_TRANSACTIONS, payload: transactions})