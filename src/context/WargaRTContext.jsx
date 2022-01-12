import React, { createContext, useState} from 'react';
import axios from 'axios';

export const WargaRTContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosWarga = async () => {

  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/warga-RT');
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

export const WargaRTProvider = (props) => {
  const [dataWargaRT, setDataWargaRT] = useState([]);
  return (
    <WargaRTContext.Provider
      value={[dataWargaRT, setDataWargaRT]}
    >
      {props.children}
    </WargaRTContext.Provider>
  );
};
