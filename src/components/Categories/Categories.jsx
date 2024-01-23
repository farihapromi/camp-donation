import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
          
            <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-8'>
                {
                    items.map((item) =><Category key={item.id} item={item}></Category>)
                }

            </div>
            
        </div>
    );
};

export default Categories;