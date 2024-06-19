import React from 'react';
import './ExploreMenu.css';
import { sort_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring ...</p>
      <div className='explore-menu-list'>
        {sort_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
