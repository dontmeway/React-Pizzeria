import React from 'react'
import Swiper from './UI/Swiper'
import { AddBlock } from './components/AddBlock/index'
import Header from './components/Header/index'
import { useDispatch } from 'react-redux'
import { fetchPizzas } from './store/actions/pizza'
import { useTypedSelector } from './hooks/useTypedSelecter'
import SortPopup from './UI/SortPopup'
import {Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import { CustomPizzaPage } from './components/CustomPizzaPage'

interface IAppContext {
  setIsCustomPapeVisible?: void | any
}
export const AppContext = React.createContext<IAppContext>({})


export const App = () => {
  const [isCustomPageVisible, setIsCustomPapeVisible] = React.useState<boolean>(false)
  const [query, setQuery] = React.useState('')
  const { pizzas, cart, isLoading } = useTypedSelector(state => ({
    isLoading: state.pizzas.isLoading,
    pizzas: state.pizzas.pizzas,
    cart: state.cart
  }))
  
  const dispatch = useDispatch()
  

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])



  return (
    <div className = "wrapper">
      <AddBlock />
      <Header cart = {cart} totalAmount = {cart.totalAmount} totalPrice = {cart.totalPrice} />
      <Route path = "/" exact>
        <Swiper />
        {isCustomPageVisible && <CustomPizzaPage pizzas = {pizzas} setIsCustomPapeVisible = {setIsCustomPapeVisible}/>}
        <SortPopup setQuery = {setQuery} query = {query}/>
        <AppContext.Provider value = {{setIsCustomPapeVisible}}>
          <Home cart = {cart} query = {query} pizzas = {pizzas} isLoading = {isLoading} />
        </AppContext.Provider>
      </Route>
      <Route path = "/cart" exact>
        <Cart cart = {cart}/>
      </Route>
    </div>
  )
}

