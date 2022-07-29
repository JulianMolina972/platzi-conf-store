import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import '../styles/components/Success.css';

export const Success = () => {

  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log(buyer);
  return (
    <section className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Thank you for your checkout`}</h2>
        <span>Your order arrive in three days to your address</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </section>
  );
};
