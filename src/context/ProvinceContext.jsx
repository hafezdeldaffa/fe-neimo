import React, { createContext, useState, useEffect } from 'react';

export const ProvinceContext = createContext();

export const ProvinceContextProvider = (props) => {
  const [ProvCases, setProvCases] = useState([]);

  useEffect(() => {
    fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
      .then((res) => res.json())
      .then((result) => {
        setProvCases(result);
      });
  }, []);

  return (
    <ProvinceContext.Provider value={[ProvCases, setProvCases]}>
      {props.children}
    </ProvinceContext.Provider>
  );
};