import { createStore } from "redux";
import acountReducer from "./acountReducer";


const store = createStore(acountReducer);

export default store;
