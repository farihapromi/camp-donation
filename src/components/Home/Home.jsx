import React from 'react';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
    <title> Home</title>
  </Helmet>
 
  
               <Banner></Banner>
            <Categories></Categories>
         
            
        </div>
    );
};

export default Home;