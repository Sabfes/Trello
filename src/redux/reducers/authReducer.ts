import {AuthActions, authActionsConstants, AuthState} from "../types/auth"

const initialState: AuthState = {
    isAuth: false,
    userId: null,
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case authActionsConstants.SET_USER_ID:
            return {
                ...state,
                userId: action.payload,
            }
        case authActionsConstants.IS_AUTH_TOGGLE:
            return {
                ...state,
                isAuth: action.payload,
            }
        default:
            return state
    }
}
