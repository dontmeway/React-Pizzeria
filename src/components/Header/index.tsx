import React from 'react'
import { Link } from 'react-router-dom'


import cl from './Header.module.scss'
import logo from '../../static/images/logo.png'
import classNames from 'classnames'
import CartPopupItem from '../../UI/CartPopupItem'



interface HeaderProps {
    totalAmount: number;
    totalPrice: number;
    cart: any;
}



const Header = ({totalAmount, totalPrice, cart}: HeaderProps) => {

    const [popup, setPopup] = React.useState(false)
    const cartItems = Object.values(cart.cartItems)

    const handlePopup = () => {
        setPopup(prev => !prev)
    }
    const handlePrice = (arr: any) => {
        return arr.reduce((sum: any, elem: any) => sum + elem.currentPrice, 0)
    }
    // --------------------------------------function that returns number with commas: 1200 => 1,200 
    // --------------------------------------fix later
    // const price = React.useMemo(() => {
    //     return Number(totalPrice.toString().split('').reverse().map((elem, index) => !((index + 1) % 3) && index + 1 !== totalPrice.toString().length ? ',' + elem : elem).reverse().join(''))
    // }, [totalPrice, totalAmount])

    
    return (
        <div className = {cl.header}>
            <div className = "container">
                <div className = {cl.header__nav}>
                    <Link to = "/">
                        <div className = {cl.header__logo}>
                            <img width = {45} src = {logo} alt = "logo"/>
                            <div>
                                <h3>Pizza Planet</h3>
                                <span>Дефолтная пиццериа</span>
                            </div>
                        </div>
                    </Link>
                    <div className = {classNames(cl.cart__button, {
                        "activeCartPopup": popup && totalAmount > 0
                    })
                    }>
                        <div className = {cl.cartCount} onClick = {handlePopup}>
                            {totalAmount}
                            <i className="bi bi-cart-fill"></i>
                        </div>
                        {totalPrice !== 0 && <span style = {{margin: "0 10px", color: "#000000"}}>{totalPrice} грн.</span>}
                        <Link to = "/cart">
                            <button className = "cart__button">
                                Корзина
                            </button>
                        </Link>
                        <div className = {classNames("cart__popup", {
                            "activeCartList": popup && totalAmount > 0
                        })}>
                            {cartItems.map((item: any ) => <CartPopupItem
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
