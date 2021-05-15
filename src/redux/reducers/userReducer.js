import {userActionsConstants} from "../actions/user";

const initialState = {
    isAuth: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionsConstants.IS_AUTH_TOGGLE:
            return {
                ...state,
                isAuth: action.payload,
            }
        default:
            return state
    }
}
