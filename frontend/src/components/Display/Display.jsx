import React, { useContext } from 'react';
import './Display.css';
import { StoreContext } from '../context/StoreContext';
import Item from '../Item/Item';

const Display = ({ category }) => {
  const { plant_list } = useContext(StoreContext);

  return (
    <div className='display' id='display'>
      <h2>Top Plants</h2>
      <div className="food-display-list">
        {plant_list
          .filter(item => category === "All" || item.category === category) // Optional: filter items based on category
          .map((item, index) => (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
      <hr/>
    </div>
  );
}

export default Display;
