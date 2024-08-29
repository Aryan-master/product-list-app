import React, { createContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);

  return (
    <CompareContext.Provider value={{ compareProducts, setCompareProducts }}>
      {children}
    </CompareContext.Provider>
  );
};
