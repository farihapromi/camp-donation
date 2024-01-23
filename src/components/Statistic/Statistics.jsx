// Statistics.jsx
import React from 'react';
import { Chart } from 'react-google-charts';
import { Helmet } from 'react-helmet-async';



const Statistics = ({ numDonations }) => {

  const data = [
    ['Category', 'Donation'],
    ['Your Donations', numDonations],
    ['Total Donations', 12-numDonations ], 
  ];



  return (
  
   <div>
     <Chart
      chartType="PieChart"
      data={data}
   
      width={'100%'}
      height={'400px'}
      
    />
     
   
   </div>
    
  );
};

export default Statistics;
