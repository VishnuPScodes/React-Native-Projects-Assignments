

export const navActions={
    CHANGE_PATH:"CHANGE_PATH",
    AUTH_LOGIN:"AUTH_LOGIN",
    AUTH_LOGOUT:"AUTH_LOGOUT"
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
