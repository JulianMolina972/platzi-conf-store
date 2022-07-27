import React, { Children } from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
