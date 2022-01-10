import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const KeluargaContext = createContext();
const token = localStorage.getItem('token')

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${token}`;
    return config
  }
)

export const KeluargaContextProvider = (props) => {
  const [dataKeluarga, setDataKeluarga] = useState([]);
  useEffect(() => {
    axios.get('https://neimo-be.herokuapp.com/anggota-keluarga')
      .then((result) => {
        setDataKeluarga(result.data);
      })
      .catch((error) =>{
        if(error){

        }else{

        }
      })
  }, []);
  return (
    <KeluargaContext.Provider value={[dataKeluarga, setDataKeluarga]}>
      {props.children}
    </KeluargaContext.Provider>
  );
};
