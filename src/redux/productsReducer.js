import { GET_ALL, GET_ALL_COST, INIT, LOAD_ORDERS } from "./types";

const initialState = {
    products: [],
    orders: [],
    sum: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state, products: action.payload};
        case LOAD_ORDERS:
            return {...state, orders: action.payload};
        case GET_ALL_COST:
            return {...state, sum: action.payload};
        case GET_ALL:
            return {...state, products: action.payload};
        default: return state;
    }
};