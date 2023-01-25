import RepoStore from "@/store/repoStore"
import BlockStore from "@/store/blockStore";

export class RootStore {
    repoStore;
    blockStore;

    constructor() {
        this.repoStore = new RepoStore();
        this.blockStore = new BlockStore()
    }
}