import { navActions } from "./action"



const initState={
    path:''
}

export const navReducer=(state=initState,action)=>{
    switch(action.type){
        case navActions.CHANGE_PATH :{
            return {
                ...state,
                path:action.payload
            }
        }
        default :
        return state
    }
}