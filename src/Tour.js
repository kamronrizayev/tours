import React, { useState } from 'react';

const Tour = ({el , removeItem}) => {
  return(
      <article className='single-tour'>
        <img src={el.image}/>
        <footer>
          <div className='tour-info'>
          <h4>{el.name}</h4>
          <h4 className='tour-price'>{el.price}</h4>
          <button onClick={()=> removeItem(el.name)}>delete</button>
          </div>
        </footer>
      </article>
  );
};

export default Tour;
