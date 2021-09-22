import React from 'react'
import { useDispatch } from 'react-redux'
import { sortPizzas } from '../store/actions/pizza'


interface Props {
    setQuery: any,
    query: string
}

const popupList = [{name: "Цена низкая-высокая", value: "descending"}, {name: "Цена высокая-низкая", value: "ascending"}]




function SortPopup({setQuery, query}: Props) {
    const [popup, setPopup] = React.useState(false)
    
    const [sortBy, setSortBy] = React.useState("Сортировка")
    const dispatch = useDispatch()
    const handlePopup = () => {
        setPopup(prev => !prev)
    }

    const handleChangeSort = (obj: any) => {
        setSortBy(obj.name)
        dispatch(sortPizzas(obj.value))
        setPopup(false)
    }
    return (
        <div className = "container sortPopupWrapper">
            <div className = "sortPopup">
                <p onClick = {handlePopup}>{sortBy}</p>
                <ul className = {popup ? "activePopup" : ""}>
                    {popupList.map(item => 
                        <li 
                            key = {item.name}
                            onClick = {() => handleChangeSort(item)}>
                            {item.name}
                        </li>)}  
                </ul>
            </div>
            <input placeholder = "Поиск..." value = {query} onChange = {(e) => setQuery(e.target.value)}/>
        </div>

    )
}

export default SortPopup
