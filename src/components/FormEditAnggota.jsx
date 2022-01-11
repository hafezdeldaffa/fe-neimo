import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const FormEditAnggota = (props) => {
  let data;
  props.data.data === undefined ? (
    <></>
  ) : (
    (data = props.data.data.anggotaKeluarga)
  );

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Anggota Keluarga</Modal.Title>
        </Modal.Header>
        <form>
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
                  value={data === undefined ? '' : data.nama}
                />
                {/* INPUT ROLE */}
                <select
                  className='form-select mt-2'
                  aria-label='Default select example'
                >
                  <option>--Pilih Role--</option>
                  <option
                    selected={
                      data === undefined
                        ? 'false'
                        : data.role === 'Anak'
                        ? 'true'
                        : 'false'
                    }
                    value='Kepala Keluarga'
                  >
                    Kepala Keluarga
                  </option>
                  <option
                    selected={
                      data === undefined
                        ? 'false'
                        : data.role === 'Istri'
                        ? 'true'
                        : 'false'
                    }
                    value='Istri'
                  >
                    Istri
                  </option>
                  <option
                    selected={
                      data === undefined
                        ? 'false'
                        : data.role === 'Anak'
                        ? 'true'
                        : 'false'
                    }
                    value='Anak'
                  >
                    Anak
                  </option>
                  <option
                    selected={
                      data === undefined
                        ? 'false'
                        : data.role !== 'Kepala Keluarga' &&
                          data.role !== 'Anak' &&
                          data.role !== 'Istri'
                        ? 'true'
                        : 'false'
                    }
                    value='Lain-lain'
                  >
                    Lain-Lain
                  </option>
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
                        />
                      </div>
                    </div>
                    <div className='row  mt-2'>
                      <div className='col'>
                        {/* INPUT DOSIS 1 */}
                        <select
                          className='form-select'
                          aria-label='Default select example'
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
                            id='positif'
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
              type='button'
              className='btn addAnggota2-btn'
              style={{ width: '100%' }}
            >
              Edit Data
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormEditAnggota;
