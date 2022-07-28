import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state: cart, removeFromCart } = useContext(AppContext);

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.cart.length > 0 ? <h3>Order list: </h3> : <h3>No orders...</h3>}
        {cart.cart.map((item, i) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}>
              <AiFillDelete title="delete" size="2rem" />
            </button>
          </div>
        ))}
      </div>
      {cart.cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Price Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continue order</button>
          </Link>
        </div>
      )}
    </div>
  );
};
