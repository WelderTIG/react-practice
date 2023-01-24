export const prepareBlockInfo = (blockInfo: any) => {
    return {
        hash: blockInfo.hash,
        parentHash: blockInfo.parentHash,
        number: blockInfo.number,
        timestamp: blockInfo.timestamp,
        txCount: blockInfo.transactions.length,
    }
}