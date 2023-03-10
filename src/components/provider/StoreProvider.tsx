import React from 'react';
import { RootStore } from "@/store";
import { createContext, ReactNode, useContext } from "react";

let store: RootStore

const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({ children }: { children: ReactNode }) {
    const root = store ?? new RootStore()
    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
}

export function useRootStore() {
    const context = useContext(StoreContext)
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider")
    }
    return context
}
