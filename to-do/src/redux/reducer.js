import { todoActions } from "./action"



const initState={
    todo:[]
}

export const todoReducer=(state=initState,action)=>{
     switch(action.type){
        case todoActions.ADD_TODO:{
            return {
                ...state,
                todo:[...state.todo,action.payload]
            }
        }
        case todoActions.CHANGE_STATUS :{
            return {
                ...state,
                todo:state.todo.filter((e)=>{
                    if(e.id!=action.payload){
                        return e 
                    }
                })
            }
        }
        default :
        return state
     }
}
