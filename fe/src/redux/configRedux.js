import { combineReducers, createStore } from "redux";
import { reducerTrangLoading } from "./reducers/reducerTrangLoading";

const rootReducer = combineReducers({
  reducerTrangLoading,
});

const store = createStore(rootReducer);

export default store;
