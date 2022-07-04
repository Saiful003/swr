import { createStore, combineReducers } from "redux";
import modalReducer from "../reducers/modalReducer";
import drawerReducer from "../reducers/drawerReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  drawer: drawerReducer,
});

const store = createStore(rootReducer);
export default store;
