import { PizzaAction, PizzaActionTypes, PizzaState } from "../../types/pizza"

const initialState: PizzaState = {
    pizzas: [],
    isLoading: false,
    error: null,
    sortBy: null,
}





export const pizzaReducer = (state = initialState, action: PizzaAction): PizzaState => {
    switch (action.type) {
        case PizzaActionTypes.FETCH_PIZZAS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case PizzaActionTypes.FETCH_PIZZAS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                pizzas: action.payload
            }
        }
        case PizzaActionTypes.FETCH_PIZZAS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case PizzaActionTypes.SORT_PIZZAS: {
            if (action.payload === "descending") {
                const sortedPizzas = [...state.pizzas].sort((a, b) => a.price - b.price)
                return {
                    ...state,
                    isLoading: false,
                    pizzas: sortedPizzas
                }
            } else if (action.payload === "ascending") {
                const sortedPizzas = [...state.pizzas].sort((a, b) => b.price - a.price)
                return {
                    ...state,
                    isLoading: false,
                    pizzas: sortedPizzas
                }
            }
            return state
        }
        default: 
            return state
    }
}