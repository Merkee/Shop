import { GET_ALL, INIT } from "./types";

export const initProducts = () => {
  return async dispatch => {
    const response = await fetch("/selectProducts");
    const json = await response.json();
    dispatch({type: INIT, payload: json});
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