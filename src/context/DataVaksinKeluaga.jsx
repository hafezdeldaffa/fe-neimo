import React, { createContext, useState } from 'react';
import axios from 'axios';

export const VaksinKeluargaContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosVaksin = async () => {
  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/vaksin');
    return result.data;
  } catch (err) {
    if (err.response.status === 404) {
      return 'kosong';
    } else if (err.response.status === 403) {
      window.location.href = '/login';
    }
  }
};

export const VaksinKeluargaProvider = (props) => {
  const [dataVaksinKeluarga, setDataVaksinKeluarga] = useState([]);

  return (
    <VaksinKeluargaContext.Provider
      value={[dataVaksinKeluarga, setDataVaksinKeluarga]}
    >
      {props.children}
    </VaksinKeluargaContext.Provider>
  );
};
