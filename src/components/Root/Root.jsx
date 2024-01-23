import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl max-auto'>
                <Header></Header>
              
                <Outlet></Outlet>
            </div>
         
          
       
        </div>
    );
};

export default Root;