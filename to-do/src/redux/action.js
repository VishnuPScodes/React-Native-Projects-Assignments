


export const todoActions={
    ADD_TODO:"ADD_TODO",
    CHANGE_STATUS:"CHANGE_STATUS",

}

export const addTodo=(payload)=>{
    return {
        type:todoActions.ADD_TODO,
        payload:payload
    }
}

export const changeStatus=(payload)=>{
    return {
        type:todoActions.CHANGE_STATUS,
        payload:payload
    }
}