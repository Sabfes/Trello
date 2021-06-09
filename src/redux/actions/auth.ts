import {authApi} from "../../api/authApi";
import {AuthActions, authActionsConstants, authToggleType, setUserIdType} from "../types/auth";
import {Dispatch} from "redux";

//ACTIONS
export const authToggle = (isAuth: boolean): authToggleType => {
    return {
        type: authActionsConstants.IS_AUTH_TOGGLE,
        payload: isAuth,
    }
}

export const setUserId = (id: number): setUserIdType => {
    return {
        type: authActionsConstants.SET_USER_ID,
        payload: id
    }
}

//THUNK
export const authMe = () => async (dispatch: Dispatch<AuthActions>) => {
    const res = await authApi.getAuth()

    if (res.status === 200) {
        dispatch(authToggle(true))
        dispatch(setUserId(res.data.message))
    }
}

export const loginMe = (userName: string, password: string) => async (dispatch: Dispatch<AuthActions>) => {
    const res = await authApi.login(userName, password)

    if (res.status === 200) {
        localStorage.setItem('token', res.data.token)
        dispatch(authToggle(true))
        dispatch(setUserId(res.data.id))

        return true
    }
}

export const registrationMe = (login: string, password: string, email: string, role: string[]) => async () => {
    try {
        const res = await authApi.registration(login, password, email, role)

        if (res.status === 200) {
            console.log(res.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
