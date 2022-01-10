import React, { useContext, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import FormEditAnggota from './FormEditAnggota';
import DeleteConfirmation from './DeleteConfirmation';
import { KeluargaContext } from '../context/DataKeluargaContext';
const DataKeluargaTable = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dataKeluarga] = useContext(KeluargaContext);
  const data = dataKeluarga.anggotaKeluarga;

  const editHandler = async (setShow) => {};

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
                    <tr className='border-1'>
                      <th scope='row' className=' d-none d-sm-block'>
                        {index + 1}
                      </th>
                      <td>{element.nama}</td>
                      <td>{element.role}</td>
                      <td>
                        <FaIcons.FaEdit
                          style={{ color: '2647bd' }}
                          onClick={() => setShow(true)}
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
  } else {
    return (
      <>
        <div className='d-flex justify-content-center'>
          <div class='spinner-grow text-primary' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-secondary' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-success' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-danger' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-warning' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-info' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-light' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
          <div class='spinner-grow text-dark' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      </>
    );
  }
};

export default DataKeluargaTable;
