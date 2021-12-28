import React, { createContext, useState, useEffect } from 'react';

export const IndonesiaDailyContext = createContext();

export const IndonesiaDailyContextProvider = (props) => {
  const [DailyCases, setDailyCases] = useState([]);

  useEffect(() => {
    fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian')
      .then((res) => res.json())
      .then((result) => {
          const data = result.slice(result.length-7, result.length);
        setDailyCases(data);
      });
  }, []);

  return (
    <IndonesiaDailyContext.Provider value={[DailyCases, setDailyCases]}>
      {props.children}
    </IndonesiaDailyContext.Provider>
  );
};