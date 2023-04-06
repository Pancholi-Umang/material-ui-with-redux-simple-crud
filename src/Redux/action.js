import axios from "axios";
import * as types from "./actionType";

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`http://localhost:5000/user`)
    .then((resp) => {
      dispatch({
        type: types.GET_USERS,
        payload: resp.data,
      });
    });
  };
};


export const deleteUsers = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:5000/user/${id}`)
    .then((resp) => {
      console.log(resp)
      dispatch({
        type: types.DELETE_USERS,
      });
    });
  };
};

export const addUsers = (users) => {
  return function(dispatch){
    axios.post(`http://localhost:5000/user`,users)
    .then((response)=>{
      console.log(response.data)
      dispatch({
        type:types.ADD_USERS,
        payload:response.data
      })
    })
  }
}

export const editUsers = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:5000/user/${id}`)
    .then((resp) => {
      dispatch({
        type: types.GET_SINGLE_USERS,
        payload: resp.data,
      });
    });
  };
}

export const updateUsers = (data) => {
  return function (dispatch) {
    axios.put(`http://localhost:5000/user/${data.id}`,data)
    .then(() => {
      dispatch({
        type: types.UPDATE_USERS,
      });
    })
  }
}