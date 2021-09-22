import React from 'react'
import { Link } from 'react-router-dom'


import emptyCart from '../static/images/emptyCart.png'

function EmptyCartPage() {
    return (
        <div className = "d-flex flex-column w-50 align-items-center m-auto p-3">
            <h1>Корзина пустая</h1>
            <p className = "text-center">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img width = {300} src = {emptyCart} alt = ""/>
            <Link to = "/">
                <button className = "cart__button back__button mt-4">В главную</button>
            </Link>
        </div>
    )
}

export default EmptyCartPage
