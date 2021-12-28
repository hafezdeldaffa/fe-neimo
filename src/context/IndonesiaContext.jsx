import React, { createContext, useState, useEffect } from 'react';

export const IndonesiaContext = createContext();

export const IndoContextProvider = (props) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
      .then((res) => res.json())
      .then((result) => {
        setCases(result);
      });
  }, []);

  return (
    <IndonesiaContext.Provider value={[cases, setCases]}>
      {props.children}
    </IndonesiaContext.Provider>
  );
};
