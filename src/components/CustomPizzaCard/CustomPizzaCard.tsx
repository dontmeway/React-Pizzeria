import classNames from 'classnames'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { AppContext } from '../../App'
import { AddToCartAction, RemoveFromCartAction } from '../../store/actions/cart'
import cl from './CustomPizzaCard.module.scss'

interface Props {
    title: string,
    image: string,
    body: string,
    price: number,
    sizes: number[],
    types: number[],
    id: number,
    count: any
}


// export const sizeTypes = ["Маленькая", "Средняя", "Большая"]
// export const categoryTypes = ["Стандарт", "Тонкое"]

function CustomPizzaCard() {
    const {setIsCustomPapeVisible} = useContext(AppContext)
    
    const dispatch = useDispatch()


    

    // const currentPrice = React.useMemo(() => {
    //     return Math.round(price + (activeSize * price / 8) - (activeType * price / 6))
    // }, [activeSize, activeType])

    // const currentId = React.useMemo(() => {
    //     return `${id}_${activeSize}|${activeType}`
    // }, [activeSize, activeType])

    
    // const handleSetType = (index: number) => {
    //     setActiveType(index)
    // }

    // const handleAddToCart = () => {
    //     dispatch(AddToCartAction({title, image, body, currentPrice, activeSize, activeType, currentId}))
    // }
    // const handleRemoveFromCart = () => {
    //     dispatch(RemoveFromCartAction(currentId))
    // }
    const handleCustomPage = () => {
        setIsCustomPapeVisible(true)
    }

    return (
        <div className = {cl.pizzaCard}>
            <img src = "https://dodopizza-a.akamaihd.net/static/Img/Products/d0e0a4876cf341a4b4b07f7bc79379a6_584x584.jpeg" alt = "pizza__img"/>
            <div className = {cl.titleBody}>
                <h5>Пицца из половинок</h5>
                <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <div className = {`${cl.pizzaCard__bottom} d-flex justify-content-between align-items-center mb-3`}> 
                <p className = "mb-0"><span>От 630</span> грн</p>
                <button onClick = {handleCustomPage} className = {cl.order__btn}>Собрать</button>
            </div>
        </div>
    )
}

export default CustomPizzaCard
