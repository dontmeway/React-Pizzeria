import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { pizzaReducer } from "./pizza";



export const rootReducer = combineReducers({pizzas: pizzaReducer, cart: cartReducer})
export type RootState = ReturnType<typeof rootReducer>