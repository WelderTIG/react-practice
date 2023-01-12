import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import blockchainReducer from "./blockchainReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {loggerMiddleware} from "@/middlewares/loggerMiddleware";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    blockchain: blockchainReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch