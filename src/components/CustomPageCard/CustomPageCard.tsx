import classNames from 'classnames'
import React from 'react'
import { ISides } from '../CustomPizzaPage'

interface ICardProps {
    customImg: string;
    handleSide : void | any,
    side: ISides,
    title: string,
    price: string | number,
    id: number,
    types: number[],
    sizes: number[],
    body: string
}

export const CustomPageCard = ({body, handleSide, side, title, customImg, price, id, types, sizes}: ICardProps) => {    
    const handleAddSide = () => {
        handleSide({id, title, customImg, price, type: types[0], size: sizes[0], body})
    }



    return (
        <div onClick = {handleAddSide} className = "customCard d-flex flex-column align-items-center">
            <div className = "customCard__img active">
                <div className = {classNames('left_side', {
                    "active": Number(side.leftSide?.id) === Number(id)
                })}>

                </div>
                <div className = {classNames("right_side", {
                    "active": Number(side.rightSide?.id) === Number(id)
                })}>

                </div>
                <img width = "118" src = {customImg} alt = "pizza" />
            </div>
            <div className = "d-flex flex-column align-items-center"> 
                <p>{title}</p>
                <b>{price} грн.</b>
            </div>
        </div>
    )
}
