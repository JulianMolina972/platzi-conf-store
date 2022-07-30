import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePositionStackAddress = address => {
  const [map, setMap] = useState({ 0:4.570868, 1:-74.297333});
  console.log(address);
  const params = {
    access_key: process.env.POSITION_STACK_API_KEY || secret.POSITION_STACK_API_KEY,
    query: address,
  };

  console.log(map, setMap);
  
  useEffect(() => {
    async function  handler() {
      const response = await axios.get('http://api.positionstack.com/v1/forward', {params});
    
      console.log(response.data);
      const result = Object.values(response.data.data[0]).slice(0, 2);
      console.log(result);
      const latLgn = { ...result};
      setMap(latLgn);
    };
    handler();
  }, []);



  return map;
};
