import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';


export default function Nav() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 600); 
    return () => clearTimeout(timer); 
  }, [location]); 

  
  useEffect(() => {
    const loginTimer = setTimeout(() => {
      setIsLoggedIn(true); 
    }, 3000); 

    return () => clearTimeout(loginTimer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <nav className="navbar px" >
      <ul>
        <h1>مَارُوفِي-Marovi</h1>
      </ul>
      <ul>
      <li ><NavLink  to="">Home</NavLink ></li>
        <li><NavLink to="/Pages">Pages</NavLink></li>
        <li><NavLink to="Portfolio">Portfolio</NavLink></li>
        <li><NavLink to="Blog">Blog</NavLink></li>
        <li><NavLink to="Shop">Shop</NavLink></li>
        <li><NavLink to="Contact">ContactUs</NavLink></li>
      </ul>
      <ul>
        <Search/>
        {/* <NavLink to="Login" className={!isLoggedIn ? "login" : ""}>
          MyAccount
          </NavLink> */}
        <Cart/>
        
        <li>
        </li>
      </ul>
    </nav>
  )
}
