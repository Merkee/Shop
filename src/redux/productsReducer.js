import { act } from "react-dom/test-utils";
import { GET_ALL, INIT } from "./types";

const initialState = {
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state, products: action.payload};
        case GET_ALL:
            return {...state, products: action.payload};
        default: return state;
    }
};