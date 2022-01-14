import React, { createContext, useState } from 'react';
import axios from 'axios';

export const KeluargaContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});


export const getAxios = async () => {

  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/anggota-keluarga');
    return result.data
  } catch (err) {
    if (err.response.status === 404) {
      return "kosong"
    } else if(err.response.status === 403) {
      window.location.href = '/login';
    }
  }
}

export const KeluargaContextProvider = (props) => {
  const [dataKeluarga, setDataKeluarga] = useState([]);
  return (
    <KeluargaContext.Provider value={[dataKeluarga, setDataKeluarga]}>
      {props.children}
    </KeluargaContext.Provider>
  );
};
