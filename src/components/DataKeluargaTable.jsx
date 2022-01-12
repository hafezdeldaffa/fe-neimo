import React, { useContext, useEffect, useState } from 'react';
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
  const data = dataKeluarga ? dataKeluarga.anggotaKeluarga  : undefined

  useEffect(async()=>{
    const axiosData =  await getAxios()
    setDataKeluarga(axiosData)
  },[])
  
console.log(data)
  const editHandler = async (setShow, id) => {
    setShow(true);
    const token = sessionStorage.getItem('token');

    axios.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    });

    const dataEdit = await axios.get(
      `https://neimo-be.herokuapp.com/anggota-keluarga/${id}`
    );
    console.log(dataEdit);
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
                          onClick={() => editHandler(setShow, element._id)}
                        ></FaIcons.FaEdit>
                        /
                        <AiIcons.AiOutlineDelete
                          style={{ color: '2647bd' }}
                          onClick={() => setShowDelete(true)}
                        ></AiIcons.AiOutlineDelete>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <FormEditAnggota show={show} onHide={() => setShow(false)} />

        <DeleteConfirmation
          show={showDelete}
          onHide={() => setShowDelete(false)}
        />
      </div>
    );
  }if (dataKeluarga === "kosong") {
   return(
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
   )
  }
   else {
    return (
      <Loading />
    );
  }
};

export default DataKeluargaTable;
