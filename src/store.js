import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = compose
const middleWare = [thunk, logger];

const store = createStore(
    reducer, composeEnhancer(applyMiddleware(...middleWare)));
export default store;