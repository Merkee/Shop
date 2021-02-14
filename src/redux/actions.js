import { GET_ALL } from "./types";

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