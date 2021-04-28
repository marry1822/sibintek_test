import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import tableReducer from "./reducers/tableReducer";

let reducers = combineReducers({
	events: tableReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;

export default store;
