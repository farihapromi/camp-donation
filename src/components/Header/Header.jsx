
import { NavLink ,Link} from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css'



const Header = () => {
  
 
    //dynamicaally creating nav items
    const link=<>
     <li><Link  to='/' 
     >Home</Link></li>
     <li><NavLink to='/donate' 
     >Donation</NavLink></li>
 
     <li><NavLink to='/mystate'> Statistics</NavLink></li>
  
            
           

    </>
    return (
      <div>
        
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <img src="/src/assets/images/Logo.png" alt="" />
          
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   w-52">
             {link}
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>
      
      
      </div>
      {/* <Banner></Banner> */}
      </div>
      



    );
};

export default Header;