import React from 'react';
import './styles/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import './styles/css/style.css';
import IndonesiaData from './container/IndonesiaData';
import Dashoard from './container/Dashboard';
import DataKeluarga from './container/DataKeluarga';
import { IndonesiaDailyContextProvider } from './context/IndonesiaDailyContext';
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
import { KeluargaContextProvider } from './context/DataKeluargaContext';
import { VaksinKeluargaProvider } from './context/DataVaksinKeluaga';
import { WargaRTProvider } from './context/WargaRTContext';
import HalamanAkun from './container/HalamanAkun';
import { ProfileProvider } from './context/ProfileContext';
import { DataPositifProvider } from './context/DataPositifContext';
import { LaporanProvider } from './context/DataLaporanContext';
import { VaksinKeluargaByIdProvider } from './context/DataVaksinKeluargaById';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <IndonesiaDailyContextProvider>
          <SidebarContextProvider>
            <KeluargaContextProvider>
              <VaksinKeluargaByIdProvider>
                <VaksinKeluargaProvider>
                  <WargaRTProvider>
                    <ProfileProvider>
                      <DataPositifProvider>
                        <LaporanProvider>
                          <Routes>
                            <Route
                              exact
                              path='/'
                              element={<LandingPage />}
                            ></Route>
                            <Route
                              path='/indonesia'
                              element={<IndonesiaData />}
                            ></Route>
                            <Route
                              path='/signup'
                              element={<Signup />}
                            ></Route>
                            <Route
                              path='/login'
                              element={<Login />}
                            ></Route>
                            <Route
                              path='/logout'
                              element={<Login />}
                            ></Route>
                            <Route
                              path='/dashboard'
                              element={<Dashoard />}
                            ></Route>
                            <Route
                              path='/data-keluarga'
                              element={<DataKeluarga />}
                            ></Route>
                            <Route
                              path='/data-positif'
                              element={<DataPositif />}
                            ></Route>
                            <Route
                              path='/data-positif/detail'
                              element={<DataPositifDetail />}
                            ></Route>
                            <Route
                              path='/data-vaksin'
                              element={<DataVaksin />}
                            ></Route>
                            <Route
                              path='/data-vaksin/detail'
                              element={<DataVaksinDetail />}
                            ></Route>
                            <Route
                              path='/data-laporan'
                              element={<DataLaporanRT />}
                            ></Route>
                            <Route
                              path='/data-laporan/detail'
                              element={<DataLaporanRTDetail />}
                            ></Route>
                            <Route
                              path='/buat-laporan'
                              element={<BuatLaporan />}
                            ></Route>
                            <Route
                              path='/profile'
                              element={<HalamanAkun />}
                            ></Route>
                            <Route
                              path='*'
                              element={<LandingPage />}
                            ></Route>
                          </Routes>
                        </LaporanProvider>
                      </DataPositifProvider>
                    </ProfileProvider>
                  </WargaRTProvider>
                </VaksinKeluargaProvider>
              </VaksinKeluargaByIdProvider>
            </KeluargaContextProvider>
          </SidebarContextProvider>
        </IndonesiaDailyContextProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
