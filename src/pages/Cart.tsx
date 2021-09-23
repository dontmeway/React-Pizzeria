import classNames from 'classnames';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';
import { RemoveAllItems } from '../store/actions/cart';
import EmptyCartPage from '../UI/EmptyCartPage';






function Cart({cart}: any) {
    const pizzas = Object.values(cart.cartItems);
    const isLoading = cart.isLoading
    const dispatch = useDispatch()

    const handlePrice = (arr: any) => {
        return arr.reduce((sum: any, elem: any) => sum + elem.currentPrice, 0)
    }
    const handleSubmit = () => {
        dispatch(RemoveAllItems())
        setTimeout(() => alert("Ваш заказ принят и в процессе приготовления!"), 3000)
    }


    return (
        <div className = "container mt-4">
            {pizzas.length === 0 ? <EmptyCartPage /> :
            <div>
                <div className = "cartOrders__wrapper">
                    <h1 className = "m-5">Ваш заказ:</h1>
                        {pizzas.map((item: any) => <CartItem
                                                        key = {item[0].currentId} 
                                                        id = {item[0].currentId}
                                                        title = {item[0].title}
                                                        initialPrice = {item[0].currentPrice}
                                                        price = {handlePrice(item)}
                                                        amount = {item.length}
                                                        size = {item[0].activeSize}
                                                        type = {item[0].activeType}
                                                        />)}
                </div>
                <div className = "w-75 d-flex justify-content-around align-items-center m-auto mt-5">
                    <Link to = "/">
                        <button className = "cart__button back__button">В главную</button>
                    </Link>
                    <div className = "d-flex align-items-center">
                        <span className = "totalPrice">Итого: {cart.totalPrice} грн.</span>
                        <button onClick = {handleSubmit} className = {classNames("cart__button submit__button", {
                            "disabled": isLoading
                        })}>{isLoading && <i className="fa fa-circle-o-notch fa-spin"></i>}Оплатить</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart
