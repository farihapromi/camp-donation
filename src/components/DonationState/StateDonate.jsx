
import { useLoaderData} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getStoredCategory } from '../Utility/localStorage';
import Statistics from '../Statistic/Statistics';
import { Helmet } from 'react-helmet-async';

const StateDonate = () => {
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
  

    return (
        <div>
             <Helmet>
    <title> Statistics</title>
  </Helmet>
 
           
           <Statistics numDonations={donateCategory.length} /> 
        


            
        </div>
    );
};

export default StateDonate;