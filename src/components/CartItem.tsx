import React from 'react'
import { useDispatch } from 'react-redux'


import img from '../static/images/img.jpg'
import { AddToCartAction, RemoveFromCartAction } from '../store/actions/cart'
import { categoryTypes, sizeTypes } from './PizzaCard'

function CartItem({title, body, type, size, initialPrice, amount, price, id}: any) {
   const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(AddToCartAction({title, currentPrice: initialPrice, activeSize: size, activeType: type, currentId: id}))
    }

    const handleRemove = () => {
        dispatch(RemoveFromCartAction(id))
    }
    return (
        <div className = "cartOrder d-flex p-2 justify-content-around aling-items-center">
            <img width = {200} src = {img} alt = "pizza_image"/>
            <div className = "w-50 cartOrder__content">
                <h5>{title}</h5>
                <p className = "w-75 mb-0">{body}</p>
                <span className = "type">{sizeTypes[size]}, {categoryTypes[type]}</span>
                <div className = "d-flex justify-content-between align-items-center">
                    <span className = "cost">{price} грн.</span>
                    <div className = "buttons">
                        <button onClick = {handleRemove}>-</button>
                        <span>{amount}</span>
                        <button onClick = {handleAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
