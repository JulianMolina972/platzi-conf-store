import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { usePositionStackAddress } from '../hooks/usePositionStackAddress';
import '../styles/components/Success.css';

export const Success = () => {
  const { state: buyer } = useContext(AppContext);
  console.log(buyer.buyer);
  const location = usePositionStackAddress(buyer.buyer[0].address);

  return (
    <section className="Success">
      <div className="Success-content">
        <h2>{`${buyer.buyer[0].name}, Thank you for your checkout`}</h2>
        <span>Your order arrive in three days to your address</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </section>
  );
};
