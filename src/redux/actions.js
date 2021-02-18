import axios from "axios";
import { GET_ALL, GET_SEARCH, INIT } from "./types";

export const initProducts = () => {
  return async dispatch => {
    return axios.get("/selectProducts")
    .then(({data}) => {
      dispatch({type: INIT, payload: data});
    });
  }
}

export const getSearch = (reqSearch) => {
  return async dispatch => {
    /*return axios.post("/getSearch", {
      search: reqSearch
    })
    .then(({data}) => {
      dispatch({type: GET_SEARCH, payload: data});
    });*/
    const response = await axios.post("/getSearch", {
      search: reqSearch
    });
    dispatch({type: INIT, payload: response.data});
  }
}

export const getAllProducts = () => {
    return async dispatch => {
      const response = await fetch("/selectProducts");
      const json = await response.json();
      dispatch({type: GET_ALL, payload: json});
    }
}

/*const fetchAllProducts = (dispatch) => {
    return fetch("/selectProducts")
      .then(res => res.json())
      .then(
        data => dispatch(getAllProducts(data))
      );
};*/