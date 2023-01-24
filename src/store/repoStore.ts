import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IAccountDetails, IRepo } from "@/interfaces";

export default class RepoStore {
    accDetails: IAccountDetails = <IAccountDetails>{};
    repos: IRepo[] = [];
    isFetchingError: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    async getUserRepos(searchQuery: string) {
        try {
            if (searchQuery == "") {
                searchQuery = "WelderTIG"
            }
            const response = await axios.get(`https://api.github.com/users/${searchQuery}/repos`)
            this.repos = response.data;
            this.isFetchingError = false;
        } catch (err) {
            this.isFetchingError = true;
        }
    }

    async getAccountDetails(searchQuery: string) {
        try {
            if (searchQuery == "") {
                searchQuery = "WelderTIG"
            }
            const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
            this.accDetails = response.data;
            this.isFetchingError = false;
        } catch (err) {
            this.isFetchingError = true;
        }
    }
}