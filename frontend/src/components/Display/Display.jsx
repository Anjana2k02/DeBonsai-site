import React from 'react'
import './Display.css'
import { StoreContext } from '../context/StoreContext'

const Display = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='display' id='display'>
        <h2>Top Plants</h2>  

        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return
            })}
        </div>      
   </div>
  )
}

export default Display