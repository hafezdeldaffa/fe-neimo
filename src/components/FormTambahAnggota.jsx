import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormTambahAnggota = () => {
  const token = sessionStorage.getItem('token');
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    try {
      axios.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      });

      const result = await axios.post(
        'https://neimo-be.herokuapp.com/anggota-keluarga',
        data
      );
      if (result) {
        window.location.href = '/data-keluarga';
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn addAnggota-btn'
        style={{ width: '130px' }}
        onClick={() => setShow(true)}
      >
        Tambah Data
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Anggota Keluarga</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <Modal.Body>
            <div className='card shadow border-0 rounded-3'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      style={{ width: '25px' }}
                    />
                  </div>
                  <div className='col-11'>
                    <h5>Data Diri</h5>
                  </div>
                </div>
                {/* INPUT NAMA */}
                <input
                  type='text'
                  className='form-control mt-2'
                  id='name'
                  aria-describedby='name'
                  placeholder='Nama Lengkap'
                  {...register('nama', { required: true })}
                />
                {/* INPUT ROLE */}
                <select
                  className='form-select mt-2'
                  aria-label='Default select example'
                  defaultValue={'Anak'}
                  {...register('role', { required: true })}
                >
                  <option>--Pilih Role--</option>
                  <option value='Kepala Keluarga'>Kepala Keluarga</option>
                  <option value='Istri'>Istri</option>
                  <option value='Anak'>Anak</option>
                  <option value='Lain-lain'>Lain-Lain</option>
                </select>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col'>
                <div className='card shadow border-0 rounded-3'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-1'>
                        <img
                          src='/images/vaksin_icon.png'
                          alt=''
                          style={{ width: '25px' }}
                        />
                      </div>
                      <div className='col-11'>
                        <h5>Data Status Vaksin</h5>
                      </div>
                    </div>
                    <div className='row  mt-2'>
                      <div className='col'>
                        {/* INPUT DOSIS 1 */}
                        <select
                          className='form-select'
                          aria-label='Default select example'
                          defaultValue={'Belum Vaksin'}
                          {...register('dosis1', { required: true })}
                        >
                          <option>Jenis Vaksin</option>
                          <option value='Belum Vaksin'>Belum Vaksin</option>
                          <option value='Sinovac'>Sinovac</option>
                          <option value='Astra Z'>Astra Z</option>
                          <option value='Moderna'>Moderna</option>
                          <option value='Lain-lain'>Lain-lain</option>
                        </select>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start mt-1'
                          type='date'
                          style={{ border: 'none' }}
                          {...register('tanggalDosis1')}
                        />
                      </div>
                    </div>
                    <div className='row  mt-2'>
                      <div className='col'>
                        {/* INPUT DOSIS 2 */}
                        <select
                          className='form-select'
                          aria-label='Default select example'
                          defaultValue={'Belum Vaksin'}
                          {...register('dosis2', { required: true })}
                        >
                          <option>Jenis Vaksin</option>
                          <option value='Belum Vaksin'>Belum Vaksin</option>
                          <option value='Sinovac'>Sinovac</option>
                          <option value='Astra Z'>Astra Z</option>
                          <option value='Moderna'>Moderna</option>
                          <option value='Lain-lain'>Lain-lain</option>
                        </select>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start mt-1'
                          type='date'
                          style={{ border: 'none' }}
                          {...register('tanggalDosis2')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card shadow border-0 rounded-3  pb-3 mt-md-0 mt-2'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-1'>
                        <img
                          src='/images/notification.png'
                          alt=''
                          style={{ width: '25px' }}
                        />
                      </div>
                      <div className='col-11'>
                        <h5>Data Status Covid</h5>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col'>
                        <div className='form-check '>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='positif'
                            value='Positif'
                            {...register('statusCovid', { required: true })}
                          />
                          <label className='form-check-label' htmlFor='positif'>
                            Positif
                          </label>
                        </div>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start'
                          type='date'
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                    <div className='row mt-2'>
                      <div className='col'>
                        <div className='form-check '>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='negatif'
                            value='Negatif'
                            {...register('statusCovid', { required: true })}
                          />
                          <label className='form-check-label' htmlFor='positif'>
                            Negatif
                          </label>
                        </div>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start'
                          type='date'
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type='submit'
              className='btn addAnggota2-btn'
              style={{ width: '100%' }}
            >
              Tambah Data
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormTambahAnggota;
