import React, { createContext, useState } from 'react';
import axios from 'axios';

export const LaporanContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosLaporan = async () => {

  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/laporan');
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

export const LaporanProvider = (props) => {
  const [dataLaporan, setDataLaporan] = useState([]);
  return (
    <LaporanContext.Provider
      value={[dataLaporan, setDataLaporan]}
    >
      {props.children}
    </LaporanContext.Provider>
  );
};
