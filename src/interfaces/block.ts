
export interface ITransaction {
    hash: string;
    from: string;
}
export interface ITransactionProps {
    key: number;
    tx: ITransaction;
}
export interface IBlockInfo {
    timestamp: any;
    number: any;
    parentHash: any;
    hash: any;
    txCount: any
}
export interface ILastBlockInfo {
    id: string;
    login: string;
    created_at: number;
    updated_at: number;
}
export interface IDefaultBlockState {
    lastBlockInfo: ILastBlockInfo;
    transactions: ITransaction[];
}