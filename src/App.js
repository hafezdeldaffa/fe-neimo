import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';
import Dashoard from './container/Dashboard';
import DataKeluarga from './container/DataKeluarga';

import { IndoContextProvider } from './context/IndonesiaContext';
import { ProvinceContextProvider } from './context/ProvinceContext';
import { IndonesiaDailyContextProvider } from './context/IndonesiaDailyContext';
import { CountriesContextProvider } from './context/CountriesContext';
import { GlobalContextProvider } from './context/GlobalContext';
import { SidebarContextProvider } from './context/SidebarContext';

import Login from './container/Login';
import Signup from './container/Signup';
import DataPositif from './container/DataPositif';
import DataVaksin from './container/DataVaksin';
import DataPositifDetail from './container/DataPositifDetail';
import DataVaksinDetail from './container/DataVaksinDetail';
import BuatLaporan from './container/BuatLaporan';
import DataLaporanRT from './container/DataLaporanRT';
import DataLaporanRTDetail from './container/DataLaporanRTDetail';


function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <GlobalContextProvider>
          <IndoContextProvider>
            <ProvinceContextProvider>
              <IndonesiaDailyContextProvider>
                <CountriesContextProvider>
                  <SidebarContextProvider>
                    <Routes>
                      <Route exact path='/' element={<LandingPage />}></Route>
                      <Route path='/indonesia' element={<IndonesiaData />}></Route>
                      <Route path='/signup' element={<Signup />}></Route>
                      <Route path='/login' element={<Login />}></Route>
                      <Route path='/dashboard' element={<Dashoard />} ></Route>
                      <Route path='/data-keluarga' element={<DataKeluarga />} ></Route>
                      <Route path='/data-positif' element={<DataPositif />} ></Route>
                      <Route path='/data-positif/detail' element={<DataPositifDetail />} ></Route>
                      <Route path='/data-vaksin' element={<DataVaksin />}></Route>
                      <Route path='/data-vaksin/detail' element={<DataVaksinDetail />}></Route>
                      <Route path='/data-laporan' element={<DataLaporanRT />}></Route>
                      <Route path='/data-laporan/detail' element={<DataLaporanRTDetail />}></Route>
                      <Route path='/buat-laporan' element={<BuatLaporan />} ></Route>
                      <Route path='*' element={<LandingPage />}></Route>
                    </Routes>
                  </SidebarContextProvider>
                </CountriesContextProvider>
              </IndonesiaDailyContextProvider>
            </ProvinceContextProvider>
          </IndoContextProvider>
        </GlobalContextProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
