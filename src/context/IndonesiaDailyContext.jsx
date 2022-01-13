import axios from 'axios';
import React, { createContext, useState} from 'react';

export const IndonesiaDailyContext = createContext();

export const getDailyCases = async () => {
  
  try {
    const result = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian');
    const data = result.data
    const dataa = data.slice(data.length-7, data.length)
    return dataa
  } catch (err) {
    if (err.response.status === 404) {
      return "kosong"
    } else if(err.response.status === 403) {
      window.location.href = '/login';
    }
  }
}


export const IndonesiaDailyContextProvider = (props) => {
  const [DailyCases, setDailyCases] = useState([]);

  return (
    <IndonesiaDailyContext.Provider value={[DailyCases, setDailyCases]}>
      {props.children}
    </IndonesiaDailyContext.Provider>
  );
};