import React from "react";
import { createRoot } from 'react-dom/client';
import { App, RootStoreProvider } from "@/components";
import '@/index.css';

const root = createRoot(document.getElementById("root"));

root.render(
    <RootStoreProvider>
        <App/>
    </RootStoreProvider>
)