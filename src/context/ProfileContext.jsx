import React, { createContext, useState} from 'react';
import axios from 'axios';

export const ProfileContext = createContext();
const token = sessionStorage.getItem('token');

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosPofile = async () => {

  try {
    const result = await axios.get('https://neimo-be.herokuapp.com/profile');
    console.log(result.data)
    return result.data
  } catch (err) {
    if (err.response.status === 404) {
      return "kosong"
    } else if(err.response.status === 403) {
      window.location.href = '/login';
    }
  }
}

export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState([]);
  return (
    <ProfileContext.Provider
      value={[profile, setProfile]}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
