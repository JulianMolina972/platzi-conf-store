import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/components/Header.css';

export const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziCong Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket title="checkout" size="3rem" />
        </Link>
      </div>
    </header>
  );
};
