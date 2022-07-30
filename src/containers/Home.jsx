import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState.js';
import { Products } from '../components/Products';

export const Home = () => {
  return (
    <>
    <Helmet>
      <title> Platzi Conf Store - Products</title>
    </Helmet>
      <Products products={initialState.products} />
    </>
  
  
  );
};
