import {combineReducers} from "redux";
import {counter} from './counter';
import { multiply } from "./multiply";
export default combineReducers({
    counter,
    multiply
});