import { combineReducers } from "redux";
import imts from "./imts";
import orders from "./orders"
import breadcrumb from "./breadcrum";

const appReducers = combineReducers({
    imts,
    orders,
    breadcrumb
});
export default appReducers;