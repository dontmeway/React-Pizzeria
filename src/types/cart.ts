export interface CartState {
    cartItems: any;
    isLoading: boolean;
    error: string | null;
    totalPrice: number;
    totalAmount: number | any;
    totalPizzasInCard: any;
}


export enum CartActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    ADD_TO_CART_ERROR = "ADD_TO_CART_ERROR",
    REMOVE_FULL_ITEM =  "REMOVE_FULL_ITEM",
    REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS",
    REMOVE_ALL_ITEMS_SUCCESS = 'REMOVE_ALL_ITEMS_SUCCESS'
}


interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART,
}
interface AddToCartSuccessAction {
    type: CartActionTypes.ADD_TO_CART_SUCCESS,
    payload: any
}
interface AddToCartErrorAction {
    type: CartActionTypes.ADD_TO_CART_ERROR,
    payload: string
}
interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: string
}
interface RemoveFullFromCart {
    type: CartActionTypes.REMOVE_FULL_ITEM,
    payload: string
}
interface RemoveAllItemsAction {
    type: CartActionTypes.REMOVE_ALL_ITEMS,
}
interface RemoveAllItemsSuccessAction {
    type: CartActionTypes.REMOVE_ALL_ITEMS_SUCCESS,
}

export type CartActions = AddToCartAction | AddToCartSuccessAction | AddToCartErrorAction | RemoveFromCartAction | RemoveFullFromCart | RemoveAllItemsAction | RemoveAllItemsSuccessAction