import React from 'react';
import Tour from './Tour';
const Tours = ({data,removeItem}) => {
  console.log(data);
  return(
    <section>
       <div className="title">
          <h2>OUR TOURS</h2>
          <div className="underline"></div>
       </div>
       <div>

          {data.map(el =>{
            return(
              <Tour  removeItem={removeItem} el ={el} 
                    
              />
            )
          })}
       </div>

    </section>
  )
};

export default Tours;
