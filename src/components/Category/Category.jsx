import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {

    const{id,title,category,img,color_for_card_bg,color_for_text_and_button}=item;
    const cardStyle = {
        backgroundColor: color_for_card_bg, // Set the background color dynamically
      }
      const styleText={
        color:color_for_text_and_button,
        backgroundColor:color_for_card_bg,
      }
      const styleTitle={
        color:color_for_text_and_button,

      }
    return (
        <div>
                  <Link to={`item/${id}`}>

           <div className="card   shadow-xl mt-12" style={cardStyle}>
         

  <figure><img src={img} className='w-full' alt="Shoes" /></figure>
  <div className="card-body">
  
    <h2 className="card-title justify-start text-left" style={styleText}>{category}</h2>
    <p  className='font-semibold text-left'style={styleTitle}>{title}</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
</Link>
            
            
        </div>
    );
};

export default Category;