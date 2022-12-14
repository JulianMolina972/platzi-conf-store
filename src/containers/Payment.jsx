import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';

export const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <section className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.price}</h4>
              <span>$ {item.price}</span>
            </div>
          </section>
        ))}

        <div className="Payment-button">
          <PayPalScriptProvider
            options={{
              'client-id': process.env.REACT_APP_PAYPAL_ID || secrets.REACT_APP_PAYPAL_ID,
              // 'client-id': secrets.REACT_APP_PAYPAL_ID,
              currency: 'USD',
            }}
          >
            <PayPalButtons
              style={{ layout: 'vertical' }}
              disabled={false}
              createOrder={(data, actions) =>
                actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          value: Number.parseFloat(handleSumTotal()).toFixed(2),
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    return orderId;
                  })
              }
              onApprove={(data, actions) => {
                return actions.order
                  .capture()
                  .then((data) => {
                    handlePaymentSuccess(data);
                  })
                  .catch((error) => console.log(error));
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <aside></aside>
    </section>
  );
};
