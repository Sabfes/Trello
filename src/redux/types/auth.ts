export enum authActionsConstants {
    IS_AUTH_TOGGLE = 'IS_AUTH_TOGGLE',
    SET_USER_ID = 'SET_USER_ID',
}

export interface AuthState {
    isAuth: boolean
    userId: null | number
}

export interface authToggleType {
    type: authActionsConstants.IS_AUTH_TOGGLE
    payload: boolean
}

export interface setUserIdType {
    type: authActionsConstants.SET_USER_ID
    payload: number
}

export type AuthActions = setUserIdType | authToggleType
