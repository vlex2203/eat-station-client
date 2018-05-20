import React from 'react';

import './Categories.css';

const Categories = ({onClick, selectedCategory, setCategory}) => {
  const list = [
    {
      id: 'all',
      name: 'Show all'
    },
    {
      id: 'hide',
      name: 'Hide all'
    },
    {
      id: 'italy',
      name: 'Italian cousine'
    },
    {
      id: 'france',
      name: 'French cousine'
    },
    {
      id: 'mexico',
      name: 'Mexican cousine'
    }
  ]

  return(
    <div className="categories">
      <h5>Select category</h5>
      <div className="collection">
        {list.map(item => (
          <a key={item.id} 
            onClick={() => setCategory(item.id)}
            className={`collection-item ${selectedCategory === item.id ? 'active': ''}`}>
            {item.name}
          </a>))}
      </div>
    </div>
  )
};

export default Categories;
