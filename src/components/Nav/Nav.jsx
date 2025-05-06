import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import TranButt from '../TranButt/TranButt';
import DropDown from '../DropDown/DropDown';
import DropDown2 from '../DropDown2/DropDown2';
import Cart from '../Cart/Cart';

export default function Nav() {
  const [loading, setLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'pages' or 'account'
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    setActiveDropdown(null); // Close dropdown on route change
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  if (loading) return <Loader />;

  return (
    <nav className="navbar px">
      <ul>
        <h1>مَارُوفِي-Marovi</h1>
      </ul>

      <ul>
        <li><NavLink to="">Home</NavLink></li>

        <li className={`dropdown ${activeDropdown === 'pages' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('pages')}>Pages</span>
          <ul className="dropdown-menu">
          <DropDown2/>
          </ul>
        </li>

        <li><NavLink to="Portfolio">About Us</NavLink></li>
        <li><NavLink to="pages">Best Seller</NavLink></li>

        <li className={`dropdown ${activeDropdown === 'account' ? 'active' : ''}`}>
          <span onClick={() => toggleDropdown('account')}>Log IN</span>
          <ul className="dropdown-menu">
            <DropDown/>
          </ul>
        </li>

        <li><NavLink to="Contact">ContactUs</NavLink></li>
      </ul>

      <ul>
        <Search />
        <Cart/>
        <TranButt />
      </ul>
    </nav>
  );
}
