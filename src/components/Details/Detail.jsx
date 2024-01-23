
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
// import { saveItemApplication } from '../Utility/localStorage';
  import { savedCategory } from '../Utility/localStorage';


const Detail = () => {
    const details=useLoaderData();
    const{id}=useParams();
    const idInt=parseInt(id);
    const detail=details.find(details=>details.id===idInt);
    console.log(detail,id);
   
    
      const [showToast, setShowToast] = useState(false);
      
    const handleDonate=()=>{
       
        savedCategory(idInt)
        toast('You have donated successfully')
    }

   
    return (
        <div>
            <div>
            <div className="relative">
  <img src={detail.img} alt="" className='w-full mt-8' />

  <div className="absolute inset-x-0 bottom-0 z-10 bg-black opacity-60 flex justify-start items-end p-4">
    <button className= "text-white px-4 py-2 rounded-md" 
   style={{ backgroundColor: detail.color_for_text_and_button }}
   onClick={() => {
    setShowToast(true);
    handleDonate();
   }
  
}
   >
        Donate ${detail.price}</button>
        

        {showToast && (
        <div className="absolute bottom-4 right-4">
          <div className="toast toast-top toast-end">
            <div className="alert alert-info">
              <span>You have Donated Successfully.</span>
            </div>
          </div>
        </div>
      )}
  </div>
</div>



                <h3 className="text-3xl font-extrabold mt-14 text-left">{detail.title}</h3>
        <p className="text-2xl text-left mt-8">{detail.description}</p>
            </div>
            
        </div>
    );
};

export default Detail;