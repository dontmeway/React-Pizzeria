import React from 'react'
import PizzaCard from '../components/PizzaCard'
import { useQuery } from '../hooks/useQuery'
import Loader from '../UI/Loader'

interface Props {
    query: string,
    isLoading: boolean,
    cart: any,
    pizzas: any
}



function Home({query, isLoading, cart, pizzas}: Props) {

    const filteredPizzas = useQuery(query, pizzas)


    return (
        <div className = "container content d-flex flex-wrap">
          {isLoading && [...Array(8)].map((item, index) => <Loader key = {index} />)}
          {filteredPizzas?.map((pizza: any) => <PizzaCard count = {cart.totalPizzasInCard} key = {pizza.title} {...pizza} />)}
        </div>
    )
}

export default Home
