import React from 'react';
import '../styles/components/Success.css';

export const Success = () => {
  return (
    <section className="Success">
      <div className="Success-content">
        <h2>Julian, Thank you for your purchase</h2>
        <span>Your order arrive in three days to your address</span>
        <div className='Success-map'>
          Google Maps
        </div>
      </div>
    </section>

  );
};
