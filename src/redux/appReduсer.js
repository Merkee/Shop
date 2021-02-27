import { USER_SIGNIN } from "./types";

const initialState = {
    users: []
};

export const appReduсer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {...state, users: action.payload};
        default: return state;
    }
};