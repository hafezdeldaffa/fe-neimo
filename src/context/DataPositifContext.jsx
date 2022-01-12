import React, { createContext, useState} from 'react';
import axios from 'axios';

export const DataPositifContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosPositif = async () => {

  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/dataPositif');
    console.log(result.data)
    return result.data
  } catch (err) {
    console.log(err.response.status)
    if (err.response.status === 404) {
      return "kosong"
    } else if(err.response.status === 403) {
      window.location.href = '/login';
    }
  }
}

export const DataPositifProvider = (props) => {
  const [dataPositif, setDataPositif] = useState([]);
  return (
    <DataPositifContext.Provider
      value={[dataPositif, setDataPositif]}
    >
      {props.children}
    </DataPositifContext.Provider>
  );
};
