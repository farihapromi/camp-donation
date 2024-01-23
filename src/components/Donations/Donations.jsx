
import { useLoaderData} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredCategory } from '../Utility/localStorage';
import Statistics from '../Statistic/Statistics';
import StateDonate from '../DonationState/StateDonate';
import { Helmet } from 'react-helmet-async';

const Donations = () => {
    const donations=useLoaderData();
   
  
  
  

    const[donateCategory,setDonateCategory]=useState([]);
    useEffect(()=>{
        const storedCategoryIds=getStoredCategory();
        if(donations.length>0){
         
            const categoryDonated=[];
            for(const id of storedCategoryIds){
                const donate=donations.find((donate)=> donate.id ===id)
                if(donate){
                    categoryDonated.push(donate);
                }
                console.log(donate)
            }
            setDonateCategory(categoryDonated);

        }

    },[])
    const[dataLength,setDataLength]=useState(4)

    return (
        <div>
         
        

      <div className="grid grid-cols-2 gap-4">
        {donateCategory.slice(0,dataLength).map((category) => (
          
          <div key={category.id} className="card shadow-xl  ">
            <div className='flex'>
            <figure >
              <img src={category.img} className="w-full h-full object-cover" alt="Shoes" />
            </figure>
            <div className="card-body" style={{backgroundColor:category.color_for_card_bg}}>
              <h2 className="justify-start text-left"
               style={{backgroundColor:category.color_for_card_bg,
                color:category.color_for_text_and_button
              }}
              >{category.category}</h2>
              <p className="font-extrabold flex text-3xl  justify-start" 
              >{category.title}</p>
              <div className="card-actions  flex justify-start">
                <p className="text-2xl flex justify-start">${category.price}</p>
               
               </div>
               <button className='text-white text-2xl rounded-lg' 
              
              style={{backgroundColor:category.color_for_text_and_button,
                 
              }}>View Details</button>
               </div>
               
              
            </div>
           
          </div>
          
        ))}
      </div>
      {/* show all */}
      <div className={dataLength==donateCategory.length ? 'hidden':'' }>
                <button onClick={()=>setDataLength(donateCategory.length)}
                 className="btn btn-success items-center mx-auto justify-center mt-4">Show All </button>
            </div>
          
            <Helmet>
    <title> Donations</title>
  </Helmet>
 
            
        </div>
    );
};

export default Donations;