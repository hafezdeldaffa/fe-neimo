import React, { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();

export const CountriesContextProvider = (props) => {
  const [countriesCases, setcountriesCases] = useState([]);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/')
      .then((res) => res.json())
      .then((result) => {
        setcountriesCases(result);
      });
  }, []);

  return (
    <CountriesContext.Provider value={[countriesCases, setcountriesCases]}>
      {props.children}
    </CountriesContext.Provider>
  );
};