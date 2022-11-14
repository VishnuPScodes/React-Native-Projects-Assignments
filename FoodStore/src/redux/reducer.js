import { navActions } from "./action";

const initState = {
  path: "",
  auth: false,
  cart: [],
  theme: "#ff1a75",
};

export const navReducer = (state = initState, action) => {
  switch (action.type) {
    case navActions.CHANGE_PATH: {
      return {
        ...state,
        path: action.payload,
      };
    }
    case navActions.AUTH_LOGIN :{
      return {
        ...state,
        auth:true
      }
    }
    case navActions.AUTH_LOGOUT :{
      return {
        ...state,
        auth:false
      }
    }
    case navActions.ADD_TO_CART :{
      return {
        ...state,
        cart:[...state.cart,action.payload]
      }
    }
    case navActions.CHANGE_THEME :{
      return {
        ...state,
        theme:action.payload
      }
    }
    
    default:
      return state;
  }
};
