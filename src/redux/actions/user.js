export const userActionsConstants = {
    IS_AUTH_TOGGLE: 'IS_AUTH_TOGGLE',
}

export const authToggle = (isAuth) => {
    return {
        type: userActionsConstants.IS_AUTH_TOGGLE,
        payload: isAuth,
    }
}
