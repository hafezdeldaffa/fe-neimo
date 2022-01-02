import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';

import { IndoContextProvider } from './context/IndonesiaContext';
import { ProvinceContextProvider } from './context/ProvinceContext';
import { IndonesiaDailyContextProvider } from './context/IndonesiaDailyContext';
import { CountriesContextProvider } from './context/CountriesContext';
import Login from './container/Login';
import Signup from './container/Signup';

function App() {
  return (
    <React.Fragment>
      <IndoContextProvider>
        <ProvinceContextProvider>
          <IndonesiaDailyContextProvider>
            <CountriesContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route exact path='/' element={<LandingPage />}></Route>
                  <Route path='/indonesia' element={<IndonesiaData />}></Route>
                  <Route path='/signup' element={<Signup />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='*' element={<LandingPage />}></Route>
                </Routes>
              </BrowserRouter>
            </CountriesContextProvider>
          </IndonesiaDailyContextProvider>
        </ProvinceContextProvider>
      </IndoContextProvider>
    </React.Fragment>
  );
}

export default App;
