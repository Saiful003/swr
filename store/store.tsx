import { createStore, combineReducers } from "redux";
import modalReducer from "../reducers/modalReducer";
import drawerReducer from "../reducers/drawerReducer";
import themeReducer from "../reducers/themeReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  drawer: drawerReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);
export default store;
