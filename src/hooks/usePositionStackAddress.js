import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePositionStackAddress = (address) => {
  const params = {
    access_key: process.env.POSITION_STACK_API_KEY || secrets.REACT_APP_PAYPAL_ID,
    // access_key: secrets.REACT_APP_PAYPAL_ID,
    query: address,
  };

  const [map, setMap] = useState({ 0: 0, 1: 0 });

  const AxiosData = async () => {
    const response = await axios('http://api.positionstack.com/v1/forward', {
      params,
    });
    const result = Object.values(response.data.data[0]).slice(0, 2);
    const latLgn = { ...result};
    setMap(latLgn);
  };
  useEffect(() => {
    AxiosData();
  }, []);

  return map;
};
