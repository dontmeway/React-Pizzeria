import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCartAction, RemoveFromCartAction } from '../store/actions/cart'

const sizeTypes = ["Маленькая", "Средняя", "Большая"]
const categoryTypes = ["Стандарт", "Тонкое"]

function CartPopupItem({size, amount, title, price, type, id, initialPrice}: any) {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(RemoveFromCartAction(id))
    }
    const handleAdd = () => {
        dispatch(AddToCartAction({title, currentPrice: initialPrice, activeSize: size, activeType: type, currentId: id}))
    }

    const handleRemoveFull = () => {
        
    }

    
    return (
        <div className = "cartItem m-2">
            <i onClick = {handleRemoveFull} className="bi bi-x-circle"></i>
            <h6 className = "mb-2">{title}</h6>
            <p>{sizeTypes[size]}, {categoryTypes[type]}</p>
            <div className = "d-flex align-items-center justify-content-between">
                <span className = "cost">{price} грн.</span>
                <div className = "cart__buttons">
                    <button onClick = {handleRemove}>-</button>
                    <span>{amount}</span>
                    <button onClick = {handleAdd}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartPopupItem
