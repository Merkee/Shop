import { combineReducers } from "redux";
import { appReduсer } from "./appReduсer";
import { productReducer } from "./productsReducer";

export const rootReducer = combineReducers({
    productsData: productReducer,
    appData: appReduсer
});