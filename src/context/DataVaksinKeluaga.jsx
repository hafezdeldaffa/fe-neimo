import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const VaksinKeluargaContext = createContext();
const token = localStorage.getItem('token')

axios.interceptors.request.use(
    config =>{
        config.headers.authorization = `Bearer ${token}`;
        return config
    }
)

export const VaksinKeluargaProvider = (props) => {
    const [dataVaksinKeluarga, setDataVaksinKeluarga] = useState([]);
    useEffect(() => {
        axios.get('https://neimo-be.herokuapp.com/vaksin')
          .then((result) => {
            setDataVaksinKeluarga(result.data);
          })
          .catch((error) =>{
            if(error){

            }else{

            }
          })
      }, []);
    return (
      <VaksinKeluargaContext.Provider value={[dataVaksinKeluarga, setDataVaksinKeluarga]}>
      {props.children}
    </VaksinKeluargaContext.Provider>
    );
};
