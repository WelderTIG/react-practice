declare global {
    interface Window{
        ethereum?:any
    }
}
export interface IAccountDetails {
    id: string;
    login: string;
    created_at: string;
    updated_at: string;
}

export interface IRepo {
    name: string;
    stargazers_count: string;
    updated_at: number;
    html_url: string;
}
export interface IRepoProps {
    key: number;
    repo: IRepo;
}

export interface IDefaultReposState {
    accountDetails: IAccountDetails;
    items: IRepo[];
    isFetchingError: boolean;
}
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