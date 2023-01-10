const SET_BLOCKS = "SET_BLOCKS"

const defaultState = {
    blocks: [],
}
export default function blocksReducer(state = defaultState, action) {
    switch (action.type) {
        //TODO реализовать хранение блоков
        case SET_BLOCKS:
            return {
                ...state,
                blocks: action.payload.blocks
            }
        default:
            return state;
    }
}
export const setBlocks = (blocks) => ({type: SET_BLOCKS, payload: blocks})