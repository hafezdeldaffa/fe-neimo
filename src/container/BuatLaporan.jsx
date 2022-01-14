import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TableTambahLaporan from '../components/TableTambahLaporan';
import TableRiwayatLaporan from '../components/TableRiwayatLaporan';
import Login from './Login';
const BuatLaporan = () => {
  const [sidebar] = useContext(SidebarContext);

  const token = sessionStorage.getItem('token');
  if (!token) {
    return <Login />;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className='row'>
        <div className={!sidebar ? 'col-sm-2' : null}></div>
        <div className={!sidebar ? 'col-sm-10' : 'col-sm-12'}>
          <div className='container'>
            <div className='row mt-4'>
              <div className='col-2 col-md-1'>
                <img
                  src='/images/report_icon.png'
                  alt=''
                  className='ms-4'
                  style={{ width: '35px' }}
                />
              </div>
              <div className='col-10 col-md-11'>
                <h2 className='ms-3 ms-md-0'>Tambah Laporan Covid-19</h2>
              </div>
            </div>
            <TableTambahLaporan />
            <div className='container mt-4'>
              <h3>Riwayat Laporan</h3>
            </div>
            <TableRiwayatLaporan />
          </div>
        </div>
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default BuatLaporan;
