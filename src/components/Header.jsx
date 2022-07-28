import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/components/Header.css';

export const Header = () => {
  const { state: cart } = useContext(AppContext);
  
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziCong Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket title="checkout" size="3rem" />
        </Link>
        {cart.cart.length > 0 && <div className="Header-alert">{cart.cart.length}</div>}
      </div>
    </header>
  );
};
