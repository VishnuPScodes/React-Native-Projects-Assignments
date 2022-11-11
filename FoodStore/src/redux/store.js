import { legacy_createStore } from "redux";
import { navReducer } from "./reducer";




export const store=legacy_createStore(navReducer);

console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})