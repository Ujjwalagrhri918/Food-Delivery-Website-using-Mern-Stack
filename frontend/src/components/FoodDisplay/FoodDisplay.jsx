import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

// category passed as props
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className = "food-display" id = "food-display">
        <h2>Top Dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index) =>{
                // if first condition is true means it will run for all
                // if first is false then it will run for only the one for which the second is true
                // i.e the passed prop categpry equal to the item.category
                // see assets
            if(category === "All" || category === item.category){
                return <FoodItem key = {index} id = {item._id} name = {item.name} description = {item.description} price = {item.price} image = {item.image} />
                    }
                }
            )}
        </div>
    </div>
  )
}

export default FoodDisplay