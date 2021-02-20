import axios from "axios";
import { GET_ALL, GET_SEARCH, GET_TYPES, INIT } from "./types";

export const initProducts = () => {
  return async dispatch => {
    const response = await axios.get("/selectProducts");
    dispatch({type: INIT, payload: response.data});
  }
}

export const getSearch = (reqSearch) => {
  return async dispatch => {
    const response = await axios.post("/getSearch", {
      search: reqSearch
    });
    dispatch({type: GET_SEARCH, payload: response.data});
  }
}

export const getTypes = (reqTypes) => {
  return async dispatch => {
    const response = await axios.post("/getTypes", {
      types: reqTypes
    });
    dispatch({type: GET_TYPES, payload: response.data});
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