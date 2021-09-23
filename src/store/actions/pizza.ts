import axios from "axios"
import { Dispatch } from "react"
import { PizzaAction, PizzaActionTypes } from "../../types/pizza"





export const fetchPizzas = () => {
    return async(dispatch: Dispatch<PizzaAction>) => {
        try {
            dispatch({
                type: PizzaActionTypes.FETCH_PIZZAS})
            const { data } = await axios("/pizzas");
            dispatch({
                type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS, 
                payload: data})
        } catch(err) {
            dispatch({
                type: PizzaActionTypes.FETCH_PIZZAS_ERROR, 
                payload: "Error due fetching"})
        }
    }
}

export const sortPizzas = (value: string) => {
    return {
        type: PizzaActionTypes.SORT_PIZZAS,
        payload: value
    }
}