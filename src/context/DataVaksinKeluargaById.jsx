import React, { createContext, useState } from 'react';
import axios from 'axios';

export const VaksinKeluargaById = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosVaksinById = async (id) => {
  try {
    const result = await axios.get(
      `https://neimo-be.herokuapp.com/vaksin?id=${id}`
    );
    return result.data;
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 404) {
      return 'kosong';
    } else if (err.response.status === 403) {
      window.location.href = '/login';
    }
  }
};

export const VaksinKeluargaByIdProvider = (props) => {
  const [dataVaksinKeluargaById, setDataVaksinKeluargaById] = useState({});

  return (
    <VaksinKeluargaById.Provider
      value={[dataVaksinKeluargaById, setDataVaksinKeluargaById]}
    >
      {props.children}
    </VaksinKeluargaById.Provider>
  );
};
