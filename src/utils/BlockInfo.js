export const prepareBlockInfo = (blockInfo) => {
    return {
        hash: blockInfo.hash,
        parentHash: blockInfo.parentHash,
        number: blockInfo.number,
        timestamp: blockInfo.timestamp,
        txCount: blockInfo.transactions.length,
    }
}