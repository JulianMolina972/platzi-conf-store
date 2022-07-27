import React from 'react';
import '../styles/components/Information.css';

export const Information = () => {
  return (
    <main className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h2>Contact Information</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder='Complete name' name='name' />
            <input type="text" placeholder='Email' name='email' />
            <input type="text" placeholder='Address' name='address' />
            <input type="text" placeholder='Apto' name='apto' />
            <input type="text" placeholder='City' name='city' />
            <input type="text" placeholder='Country' name='country' />
            <input type="text" placeholder='State' name='state' />
            <input type="text" placeholder='Postal code' name='postal' />
            <input type="text" placeholder='Phone number' name='phoneNumber' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Go back
          </div>
          <div className="Information-next">
            Buy
          </div>
        </div>
      </section>
      <div className="Information-sidebar">
        <h3>Order: </h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </main>
  );
};
