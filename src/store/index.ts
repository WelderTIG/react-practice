import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import blockchainReducer from "./blockchainReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "@/saga/";
import { loggerMiddleware } from "@/middlewares/loggerMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";

const sageMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    repos: reposReducer,
    blockchain: blockchainReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, sageMiddleware)));

sageMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch