

export const navActions={
    CHANGE_PATH:"CHANGE_PATH",
    AUTH_LOGIN:"AUTH_LOGIN",
    AUTH_LOGOUT:"AUTH_LOGOUT",
    ADD_TO_CART:"ADD_TO_CART",
    CHANGE_THEME:"CHANGE_THEME"
}

export const changePath=(payload)=>{
    return {
       type:navActions.CHANGE_PATH,
       payload:payload
    }
}
export const authLogIn=()=>{
    return {
        type:navActions.AUTH_LOGIN
    }
}
export const authLogOut=()=>{
    return {
        type:navActions.AUTH_LOGOUT
    }
}

export const addToCart=(payload)=>{
    return {
        type:navActions.ADD_TO_CART,
        payload:payload
    }
}
export const changeTheme=(payload)=>{
    return {
        type:navActions.CHANGE_THEME,
        payload:payload
    }
}