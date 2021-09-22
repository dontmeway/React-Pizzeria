import { CartActions, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
    cartItems: {},
    error: null,
    isLoading: false,
    totalAmount: 0, 
    totalPrice: 0,
    totalPizzasInCard: {},
}

const getObjectValues = (obj: object): Array<any> => {
    return Object.values(obj)
}


// ----------------------------------needs refactoring---------------------------------------------



export const cartReducer = (state = initialState, action: CartActions): CartState => {
    switch(action.type) {
        case CartActionTypes.ADD_TO_CART: {
            return {
                ...state,
                isLoading: true
            }
        }
        case CartActionTypes.ADD_TO_CART_SUCCESS: {
            const currentItems = {
                ...state.cartItems,
                [action.payload.currentId]: state.cartItems[action.payload.currentId] 
                ? [...state.cartItems[action.payload.currentId], action.payload]
                : [action.payload]
            }
            const count = getObjectValues(currentItems).reduce((len, next: any) => len + next.length, 0)
            const arr: any = getObjectValues(currentItems).reduce((prev: any, next: any) => [...prev, ...next])
            const price = arr.reduce((sum: any, next: any) => sum + next.currentPrice, 0)
            return {
                ...state,
                isLoading: false,
                cartItems: currentItems,
                totalAmount: count,
                totalPrice: price,
                totalPizzasInCard: {
                    ...state.totalPizzasInCard,
                    [action.payload.currentId]: state.totalPizzasInCard[action.payload.currentId] ?
                    state.totalPizzasInCard[action.payload.currentId] + 1 : 1
                }
            }
        }
        case CartActionTypes.ADD_TO_CART_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        }
        case CartActionTypes.REMOVE_FROM_CART: {
            const currentItems = {
                ...state.cartItems,
                [action.payload]: [...state.cartItems[action.payload]].slice(1) 
            }
            const count = getObjectValues(currentItems).reduce((len, next: any) => len + next.length, 0) 
            const arr: any = getObjectValues(currentItems).reduce((prev: any, next: any) => [...prev, ...next])
            const price = arr.reduce((sum: any, next: any) => sum + next.currentPrice, 0)
            if (currentItems[action.payload].length === 0) {
                delete currentItems[action.payload]
            }
            return {
                ...state,
                isLoading: false,
                cartItems: currentItems,
                totalAmount: count,
                totalPrice: price,
                totalPizzasInCard: {
                    ...state.totalPizzasInCard,
                    [action.payload]: state.totalPizzasInCard[action.payload] - 1
                }
            }
        }
        case CartActionTypes.REMOVE_FULL_ITEM: {
            const currentItems = {
                ...state.cartItems
            }
            const totalItems = {
                ...state.totalPizzasInCard
            }
            delete currentItems[action.payload]
            delete totalItems[action.payload]

            const count = getObjectValues(currentItems)?.reduce((len, next: any) => len + next.length, 0) 
            const arr: any = getObjectValues(currentItems).length === 0 ? 0 : getObjectValues(currentItems).reduce((prev: any, next: any) => [...prev, ...next])
            const price = arr === 0 ? 0 : arr.reduce((sum: any, next: any) => sum + next.currentPrice, 0) 
            return {
                ...state,
                cartItems: currentItems,
                totalAmount: count,
                totalPrice: price,
                totalPizzasInCard: totalItems
            }
        }
        case CartActionTypes.REMOVE_ALL_ITEMS_SUCCESS: {
            const currentItems = {}
            return {
                ...state,
                cartItems: currentItems,
                totalAmount: 0,
                totalPrice: 0,
                isLoading: false,
                totalPizzasInCard: {}
            }
        }
        case CartActionTypes.REMOVE_ALL_ITEMS: {
            return {
                ...state,
                cartItems: {
                    ...state.cartItems
                },
                isLoading: true
            }
        }
        default: 
            return state
    }
}