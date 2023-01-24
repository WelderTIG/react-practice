import RepoStore from "@/store/repoStore"
import BlockStore from "@/store/blockStore";

class RootStore {
    repoStore;
    blockStore;

    constructor() {
        this.repoStore = new RepoStore();
        this.blockStore = new BlockStore()
    }
}

export const rootStore = new RootStore();