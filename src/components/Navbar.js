import React from 'react';
import '../sass/components/Navbar.scss';
import { FaOpencart } from 'react-icons/fa';

const Navbar = ({ totalCount }) => {
  return (
    <div className="nav-container">
      <p className="nav-logo">shopping cart</p>
      <ul className="nav-links">
        <li className="nav-links-item">
          <a href="/store">Store</a>
        </li>
        <li className="nav-links-item">
          <a href="/about">About</a>
        </li>
      </ul>
      <div className="navCart-container">
        <FaOpencart className="cart-icon" />
        <a href="/cart">Cart</a>
        <div className="cart-count-container">
          <p>{totalCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
