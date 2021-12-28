import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [positif, setPositif] = useState([]);
  const [sembuh, setSembuh] = useState([]);
  const [meninggal, setMeninggal] = useState([]);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/positif')
      .then((res) => res.json())
      .then((result) => {
        setPositif(result);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/meninggal')
      .then((res) => res.json())
      .then((result) => {
        setMeninggal(result);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/sembuh')
      .then((res) => res.json())
      .then((result) => {
        setSembuh(result);
      });
  }, []);

  return (
    <GlobalContext.Provider value={[positif, meninggal, sembuh]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
