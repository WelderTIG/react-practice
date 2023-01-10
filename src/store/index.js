import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import blocksReducer from "./blocksReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {loggerMiddleware} from "../middlewares/loggerMiddleware";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    blocks: blocksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)))