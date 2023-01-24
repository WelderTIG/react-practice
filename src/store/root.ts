import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "@/saga/";
import { composeWithDevTools } from "redux-devtools-extension";
import { reposReducer, blockchainReducer } from "@/store";
import { loggerMiddleware } from "@/middlewares/loggerMiddleware";

const sageMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    repos: reposReducer,
    blockchain: blockchainReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, sageMiddleware)));

sageMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch