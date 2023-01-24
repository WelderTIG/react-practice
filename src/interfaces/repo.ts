
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