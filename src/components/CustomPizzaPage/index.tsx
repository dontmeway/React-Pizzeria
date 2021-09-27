import React from 'react'
import { useDispatch } from 'react-redux'
import { AddToCartAction } from '../../store/actions/cart'
import { CustomPageCard } from '../CustomPageCard/CustomPageCard'

export interface ISides {
    leftSide?: any;
    rightSide?: any
    sizes?: IPizzaSize
}

interface IProps {
    pizzas: any,
    setIsCustomPapeVisible: any
}

interface IPizza {
    customImg: string,
    title: string,
    id: number,
    price: number | string,
    size: string | number,
    type: string | number,
    body: string
}


interface IPizzaSize {
    activeSize: string | number,
    activeType: string | number,
}
export const CustomPizzaPage = ({pizzas, setIsCustomPapeVisible}: IProps) => {
    
    const dispatch = useDispatch()
    const [side, setSide] = React.useState<ISides>({})
    const [activeSide, setActiveSide] = React.useState<string>('leftSide')
    
    const handleSide = ({id, customImg, title, price, size, type, body}: IPizza) => {
        
        setSide({
            ...side,
            [activeSide]: {
                customImg, 
                title, 
                id,
                price, 
            },
            sizes: {
                activeSize: size,
                activeType: type  
            } 
        })
        if (activeSide === 'leftSide') {
            setActiveSide('rightSide')
        } else {
            setActiveSide('leftSide')
        }
        
    }
        

    const addToCart = () => {
        dispatch(AddToCartAction({
            title: "Custom Pizza", 
            image: "https://dodopizza-a.akamaihd.net/site-static/dist/c6707f17b454b0af1283.svg", 
            body: "", 
            currentPrice: handlePrice(), 
            activeSize: side.sizes?.activeSize, 
            activeType: side.sizes?.activeType, 
            currentId: `${side.leftSide?.id}` + `${side.rightSide?.id}`}))
        setIsCustomPapeVisible(false)
    }

    const handlePrice = () => {
        if (!(side.leftSide?.price && side.rightSide?.price)) {
            return 0
        }
        return (side.leftSide.price / 2) + (side.rightSide.price / 2)
    }
    return (
        <div className = "overlay">
            <div className = "customPage d-flex">
                <i onClick = {() => setIsCustomPapeVisible(false)} className="bi bi-x-circle"></i>
                <div className = "leftSide">
                        <h3>Выберите пиццы для левой и правой половинки</h3>
                        <div className = "d-flex flex-wrap customCards">
                            {pizzas.map((item: any) => 
                            <CustomPageCard
                                key = {item.id}
                                side = {side} 
                                handleSide = {handleSide}
                                {...item}
                                />)}
                        </div>
                </div>
                <div className = "rightSide d-flex flex-column justify-content-between">
                    <div>
                        <div className = "rightSide__pizza">
                            <div className = "rightSide__leftPizza">
                                {side.leftSide?.customImg && <img width = "300" src = {side.leftSide?.customImg} alt = "sidePizzaIMg"/>}
                            </div>
                            <div className = "rightSide__rightPizza">
                                {side.rightSide?.customImg && <img width = "300" src = {side.rightSide?.customImg} alt = "sidePizzaIMg"/>}
                            </div>
                            <img width = "300" src = "https://dodopizza-a.akamaihd.net/site-static/dist/c6707f17b454b0af1283.svg" alt = "emptyPizza"/>
                        </div>
                        <div className = "pizzaInfo">
                            <div className = "leftPizza__info d-flex align-items-center">
                                {side.leftSide?.customImg && <img width = "60" src = {side.leftSide?.customImg} alt = "sidePizzaIMg"/>}
                                <h6 >{side.leftSide?.title}</h6>
                            </div>
                            <div className = "rightPizza__info d-flex align-items-center">
                                {side.rightSide?.customImg && <img width = "60" src = {side.rightSide?.customImg} alt = "sidePizzaIMg"/>}
                                <h6 >{side.rightSide?.title}</h6>
                            </div>
                        </div>
                    </div>
                    <div className = "submitBtn d-flex flex-column align-items-center">
                        <h5>{handlePrice()} грн.</h5>
                        <button
                            disabled = {!(side.leftSide && side.rightSide) ? true : false} 
                            onClick = {addToCart} 
                            className = "order__btn">В корзину
                        </button>
                    </div>
                </div>

            </div>            
        </div>
    )
}
