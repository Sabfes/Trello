import {authApi} from "../../api/authApi";

//ACTIONS
export const authActionsConstants = {
    IS_AUTH_TOGGLE: 'IS_AUTH_TOGGLE',
    SET_USER_ID: 'SET_USER_ID',
}

export const authToggle = (isAuth) => {
    return {
        type: authActionsConstants.IS_AUTH_TOGGLE,
        payload: isAuth,
    }
}

export const setUserId = (id) => {
    return {
        type: authActionsConstants.SET_USER_ID,
        payload: id
    }
}

//THUNK
export const authMe = () => async (dispatch) => {
    const res = await authApi.getAuth()

    if (res.status === 200) {
        dispatch(authToggle(true))
        dispatch(setUserId(res.data.message))
    }
}

export const loginMe = (userName, password) => async (dispatch) => {
    const res = await authApi.login(userName, password)

    if (res.status === 200) {
        localStorage.setItem('token', res.data.token)
        dispatch(authToggle(true))
        dispatch(setUserId(res.data.id))

        return true
    }
}

export const registrationMe = (login, password, email, role) => async () => {
    try {
        const res = await authApi.registration(login, password, email, role)

        if (res.status === 200) {
            console.log(res.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
