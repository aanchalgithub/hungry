import { combineReducers } from "redux";
import { userReducer } from "./userData/userReducer";
import { storeReducer } from "./store/storeReducer";

export const rootReducer = combineReducers({
    storeData : storeReducer,
    userData : userReducer
})

