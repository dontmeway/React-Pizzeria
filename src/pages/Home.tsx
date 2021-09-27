import React from 'react'
import CustomPizzaCard from '../components/CustomPizzaCard/CustomPizzaCard'
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
        <div className = "container d-flex flex-wrap justify-content-between">
          {isLoading && [...Array(8)].map((item, index) => <Loader key = {index} />)}
          <CustomPizzaCard />
          {filteredPizzas?.map((pizza: any) => <PizzaCard count = {cart.totalPizzasInCard} key = {pizza.title} {...pizza} />)}
        </div>
    )
}

export default Home
