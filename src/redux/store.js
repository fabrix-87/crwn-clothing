import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootRecuder from "./root-recuder";

const middlewares = [logger];

const crwnStore = createStore(rootRecuder,applyMiddleware(...middlewares));

export default crwnStore;