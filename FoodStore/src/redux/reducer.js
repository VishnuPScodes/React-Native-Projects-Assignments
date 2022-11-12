import { navActions } from "./action";

const initState = {
  path: "",
  auth: false,
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
    default:
      return state;
  }
};
