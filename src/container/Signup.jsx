import React from 'react';
import Navbar from '../components/Navbar';

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container col-xxl-8 px-4 py-sm min-vh-100'>
        <div className='row flex-lg-row align-items-center g-5 py-1'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <h1 className='display-3 fw-bold lh-1 mb-4 mt-3'>
              Daftarkan Keluarga Anda!
            </h1>
            <p className='lh-2' style={{ fontSize: '20px' }}>
              Daftar sekarang dan hubungi ketua RT Anda untuk validasi untuk
              dapat menggunakan aplikasi Neimo.
            </p>
          </div>
          <div className='col-lg-6 py-4'>
            <form>
              <div className='mb-3'>
                <input
                  placeholder='Nama Lengkap Kepala Keluarga'
                  type='text'
                  className='form-control'
                  id='exampleText1'
                  name='namaKepalaKeluarga'
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Email'
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  name='email'
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Provinsi'
                  type='text'
                  name='provinsi'
                  className='form-control'
                />
              </div>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col mb-3'>
                    <input
                      placeholder='RT'
                      type='number'
                      name='rt'
                      className='form-control'
                    />
                  </div>
                  <div className='col mb-3'>
                    <input
                      placeholder='RW'
                      type='number'
                      name='rw'
                      className='form-control'
                    />
                  </div>
                  <div className='col-4 mb-3'>
                    <input
                      placeholder='Kode Pos'
                      type='number'
                      name='kodePos'
                      className='form-control'
                    />
                  </div>
                  <div className='col-4 mb-3'>
                    <input
                      placeholder='No.Rumah'
                      type='number'
                      name='nomorRumah'
                      className='form-control'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Alamat'
                  type='text'
                  name='alamat'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Token RT'
                  type='number'
                  name='tokenRT'
                  className='form-control'
                />
              </div>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col'>
                    <h6>Pilih Role Anda: </h6>
                  </div>
                  <div className='col-3 form-check form-check-inline mb-3 px-10'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='role'
                      id='inlineRadio1'
                      value='RT'
                    />
                    <label className='form-check-label' for='inlineRadio1'>
                      RT
                    </label>
                  </div>
                  <div className='col-3 form-check form-check-inline mb-3 px-10'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='role'
                      id='inlineRadio2'
                      value='Keluarga'
                    />
                    <label className='form-check-label' for='inlineRadio2'>
                      Keluarga
                    </label>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control'
                  name='password'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Konfirmasi Password'
                  type='password'
                  className='form-control'
                  name='confirmPassword'
                  id='exampleInputPassword1'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ width: '100%' }}
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
