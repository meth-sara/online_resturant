import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [healthProfile, setHealthProfile] = useState(null);
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  return (
    <AppContext.Provider
      value={{ healthProfile, setHealthProfile, cart, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
