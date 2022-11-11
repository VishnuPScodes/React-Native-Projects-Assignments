

export const navActions={
    CHANGE_PATH:"CHANGE_PATH"
}

export const changePath=(payload)=>{
    return {
       type:navActions.CHANGE_PATH,
       payload:payload
    }
}