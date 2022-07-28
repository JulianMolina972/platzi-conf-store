import React from 'react';
import initialState from '../initialState.js';
import { Products } from '../components/Products';

export const Home = () => {
  return <Products products={initialState.products} />;
};
