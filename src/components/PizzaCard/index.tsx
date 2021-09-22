import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCartAction, RemoveFromCartAction } from '../../store/actions/cart'
import cl from './PizzaCard.module.scss'

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


export const sizeTypes = ["Маленькая", "Средняя", "Большая"]
export const categoryTypes = ["Стандарт", "Тонкое"]

function PizzaCard({title, image, body, price, sizes, types, id, count}: Props) {
    const [activeSize, setActiveSize] = React.useState(0)
    const [activeType, setActiveType] = React.useState(types[0])
    const dispatch = useDispatch()


    const handleSetSize = (index: number) => {
        setActiveSize(index)
    }

    const currentPrice = React.useMemo(() => {
        return Math.round(price + (activeSize * price / 8) - (activeType * price / 6))
    }, [activeSize, activeType])

    const currentId = React.useMemo(() => {
        return `${id}_${activeSize}|${activeType}`
    }, [activeSize, activeType])

    
    const handleSetType = (index: number) => {
        setActiveType(index)
    }

    const handleAddToCart = () => {
        dispatch(AddToCartAction({title, image, body, currentPrice, activeSize, activeType, currentId}))
    }
    const handleRemoveFromCart = () => {
        dispatch(RemoveFromCartAction(currentId))
    }

    return (
        <div className = {cl.pizzaCard}>
            <img src = {image} alt = "pizza__img"/>
            <div className = {cl.titleBody}>
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
            <div className = {cl.sizes}>
                {sizeTypes.map((size, index) => 
                <span onClick = {() => handleSetSize(index)} className = {index === activeSize ? "activeType" : ""}>
                    {size}
                </span>)}
            </div>
            <div className = {cl.types}>
                {categoryTypes.map((item, index) => 
                    <span 
                        onClick = {() => handleSetType(index)}
                        className = {classNames({
                        activeType: index === activeType,
                        disabledType: !types.includes(index)
                        })}>
                        {item}
                    </span>)}
            </div>
            <div className = {`${cl.pizzaCard__bottom} d-flex justify-content-between align-items-center mb-3`}> 
                <p className = "mb-0"><span>{currentPrice}</span> грн</p>
                    {!count[currentId] ? <button className = {cl.order__btn} onClick = {handleAddToCart}>В корзину</button> :
                    <div className = {cl.buttons}>
                        <button onClick = {handleRemoveFromCart}>-</button>
                        <span>{count[currentId]}</span>
                        <button onClick = {handleAddToCart}>+</button>
                    </div>
                    }
            </div>
        </div>
    )
}

export default PizzaCard
