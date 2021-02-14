import { GET_ALL } from "./types";

const initialState = {
    products: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {...state, products: action.payload};
        default: return state;
    }
};