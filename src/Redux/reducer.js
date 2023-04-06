import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const useReducers = (state = initialState, action) => {
  if (action.type === types.GET_USERS) {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  } else if (action.type === types.DELETE_USERS) {
    return {
      ...state,
      loading: false,
    };
  } else if (action.type === types.ADD_USERS) {
    console.log(action.payload, "", action);
    return {
      ...state,
      loading: false,
      users: [...state.users, action.payload], //this is not a mandatory
    };
  } else if (action.type === types.GET_SINGLE_USERS) {
    return {
      ...state,
      loading: false,
      user: action.payload, //use user not users because it fetch one record and give more records
    };
  }
  else if (action.type === types.UPDATE_USERS) {
    console.log(action.payload,"wdwdwd")
    return {
      ...state,
      loading: false,
      users: action.payload,
    };
  }
  else {
    return state;
  }
};

export default useReducers;
