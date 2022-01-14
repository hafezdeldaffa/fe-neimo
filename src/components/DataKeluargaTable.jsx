import React, { useContext, useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import FormEditAnggota from './FormEditAnggota';
import DeleteConfirmation from './DeleteConfirmation';
import { getAxios, KeluargaContext } from '../context/DataKeluargaContext';
import Loading from './Loading';
import axios from 'axios';

const DataKeluargaTable = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext);
  const [dataEdit, setDataEdit] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const data = dataKeluarga ? dataKeluarga.anggotaKeluarga : undefined;
  const [dataVaksin, setDataVaksin] = useState({});
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    async function getData() {
      const axiosData = await getAxios();
      setDataKeluarga(axiosData);
    }
    getData();
  }, [setDataKeluarga]);

  const editHandler = async (data) => {
    setDataEdit(data);
    axios.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    });
    const id = data._id;
    try {
      const getVaksin = await axios.get(
        `https://neimo-be.herokuapp.com/vaksin/${id}`
      );
      console.log(getVaksin);
      setDataVaksin(getVaksin);
    } catch (err) {
      if (err.response.status === 404) {
        return 'kosong';
      } else if (err.response.status === 403) {
        window.location.href = '/login';
      }
    }
    setShow(true);
  };

  const deleteHandler = async (data) => {
    setShowDelete(true);
    setDataDelete(data);
  };

  if (data && data.length) {
    return (
      <div className='container'>
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
                  <th scope='col'>Edit / Hapus</th>
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
                        <FaIcons.FaEdit
                          style={{ color: '2647bd' }}
                          onClick={() => {
                            editHandler(element);
                          }}
                        ></FaIcons.FaEdit>
                        /
                        <AiIcons.AiOutlineDelete
                          style={{ color: '2647bd' }}
                          onClick={() => deleteHandler(element)}
                        ></AiIcons.AiOutlineDelete>
                        {}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <FormEditAnggota
          data={dataEdit}
          dataVaksin={dataVaksin}
          show={show}
          onHide={() => setShow(false)}
        />

        <DeleteConfirmation
          data={dataDelete._id}
          show={showDelete}
          onHide={() => setShowDelete(false)}
        />
      </div>
    );
  }
  if (dataKeluarga === 'kosong') {
    return (
      <div className='container'>
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
                  <th scope='col'>Edit / Hapus</th>
                </tr>
              </thead>
            </table>
            <p className='text-center'>data masih kosong</p>
          </div>
        </div>
      </div>
    );
  } else {
    return data === undefined ? (
      <Loading />
    ) : (
      <div className='container'>
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
                  <th scope='col'>Edit / Hapus</th>
                </tr>
              </thead>
            </table>
            <p className='text-center'>data masih kosong</p>
          </div>
        </div>
      </div>
    );
  }
};

export default DataKeluargaTable;
