import { combineReducers } from "redux";
import useReducers from './reducer';

const RootReducer = combineReducers({
    users: useReducers,
})


export default RootReducer