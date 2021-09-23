import { Dispatch } from "react"
import { CartActions, CartActionTypes } from "../../types/cart"




export const AddToCartAction = (value: any) => {
    return {
        type: CartActionTypes.ADD_TO_CART_SUCCESS,
        payload: value
    }
}


export const RemoveFromCartAction = (value: string) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: value,
    }
}

export const RemoveFullItem = (value: string) => {
    return {
        type: CartActionTypes.REMOVE_FULL_ITEM,
        payload: value
    }
}



export const RemoveAllItems = () => {
    return (dispatch: Dispatch<CartActions>) => {
        dispatch({
            type: CartActionTypes.REMOVE_ALL_ITEMS,
        })
        setTimeout(() => dispatch({
            type: CartActionTypes.REMOVE_ALL_ITEMS_SUCCESS
        }), 3000)
    }
}