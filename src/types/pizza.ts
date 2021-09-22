export interface PizzaState {
    pizzas: any[],
    isLoading: boolean;
    error: null | string;
    sortBy: string | null;
}

export enum PizzaActionTypes {
    FETCH_PIZZAS = "FETCH_PIZZAS",
    FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS", 
    FETCH_PIZZAS_ERROR = "FETCH_PIZZAS_ERROR", 
    SORT_PIZZAS = "SORT_PIZZAS"
}

interface FetchPizzaAction {
    type: PizzaActionTypes.FETCH_PIZZAS
}

interface FetchPizzaSuccessAction {
    type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS,
    payload: object[]
}

interface FetchPizzaErrorAction {
    type: PizzaActionTypes.FETCH_PIZZAS_ERROR,
    payload: string
}
interface SortPizzasAction {
    type: PizzaActionTypes.SORT_PIZZAS,
    payload: string
}


export type PizzaAction = FetchPizzaAction | FetchPizzaSuccessAction | FetchPizzaErrorAction | SortPizzasAction