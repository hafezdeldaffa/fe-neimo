import * as GrIcons from 'react-icons/gr';
import React, { useState, useContext, useEffect } from 'react';
import FormTambahLaporan from './FormTambahLaporan';
import { getAxios, KeluargaContext } from '../context/DataKeluargaContext';
import Loading from './Loading';
const TableTambahLaporan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext);
  const [dataLaporan, setDataLaporan] = useState({});
  const data = dataKeluarga ? dataKeluarga.anggotaKeluarga : undefined;

  useEffect(() => {
    async function getData() {
      const axiosData = await getAxios();
      setDataKeluarga(axiosData);
    }
    getData();
  }, [setDataKeluarga]);

  const addHandler = async (data) => {
    setModalOpen(true);
    setDataLaporan(data);
  };

  if (data && data.length) {
    return (
      <div className='container mt-5'>
        <div className='table-wrapper-scroll-y my-custom-scrollbar'>
          <div className='table-responsive'>
            <table className='table table-borderless table-hover shadow text-center'>
              <thead className='bg-table text-white'>
                <tr>
                  <th scope='col' className=' d-none d-sm-block'>
                    No
                  </th>
                  <th scope='col'>Nama</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Tambah Laporan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((element, index) => {
                  return (
                    <tr className='border-1' key={index}>
                      <th scope='row' className=' d-none d-sm-block'>
                        {index + 1}
                      </th>
                      <td>{element.nama}</td>
                      <td>{element.role}</td>
                      <td>
                        <GrIcons.GrAddCircle
                          style={{ color: '2647bd' }}
                          onClick={() => {
                            addHandler(element);
                          }}
                        ></GrIcons.GrAddCircle>{' '}
                        Tambah Laporan
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <FormTambahLaporan
          data={dataLaporan}
          show={modalOpen}
          onHide={() => setModalOpen(false)}
        />
      </div>
    );
  }
  if (dataKeluarga === 'kosong') {
    return (
      <div className='container mt-5'>
        <div className='table-wrapper-scroll-y my-custom-scrollbar'>
          <div className='table-responsive'>
            <table className='table table-borderless table-hover shadow text-center'>
              <thead className='bg-table text-white'>
                <tr>
                  <th scope='col' className=' d-none d-sm-block'>
                    No
                  </th>
                  <th scope='col'>Nama</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Tambah Laporan</th>
                </tr>
              </thead>
            </table>
            <p className='text-center'>belum terdapat data anggota keluarga</p>
          </div>
        </div>
      </div>
    );
  } else {
    return data === undefined ? (
      <div className='mt-3'>
        <Loading />
      </div>
    ) : (
      <div className='container mt-5'>
        <div className='table-wrapper-scroll-y my-custom-scrollbar'>
          <div className='table-responsive'>
            <table className='table table-borderless table-hover shadow text-center'>
              <thead className='bg-table text-white'>
                <tr>
                  <th scope='col' className=' d-none d-sm-block'>
                    No
                  </th>
                  <th scope='col'>Nama</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Tambah Laporan</th>
                </tr>
              </thead>
            </table>
            <p className='text-center'>belum terdapat data anggota keluarga</p>
          </div>
        </div>
      </div>
    );
  }
};

export default TableTambahLaporan;
