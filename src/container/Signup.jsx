import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const signup = await axios.post(
      'https://neimo-be.herokuapp.com/auth/signup',
      data
    );
    console.log(signup);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <input
                  placeholder='Nama Lengkap Kepala Keluarga'
                  type='text'
                  className='form-control'
                  id='exampleText1'
                  name='namaKepalaKeluarga'
                  {...register('namaKepalaKeluarga', { required: true })}
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
                  {...register('email', { required: true })}
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Provinsi'
                  type='text'
                  name='provinsi'
                  className='form-control'
                  {...register('provinsi', { required: true })}
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
                      {...register('rt', { required: true })}
                    />
                  </div>
                  <div className='col mb-3'>
                    <input
                      placeholder='RW'
                      type='number'
                      name='rw'
                      className='form-control'
                      {...register('rw', { required: true })}
                    />
                  </div>
                  <div className='col-4 mb-3'>
                    <input
                      placeholder='Kode Pos'
                      type='number'
                      name='kodePos'
                      className='form-control'
                      {...register('kodePos', { required: true })}
                    />
                  </div>
                  <div className='col-4 mb-3'>
                    <input
                      placeholder='No.Rumah'
                      type='number'
                      name='nomorRumah'
                      className='form-control'
                      {...register('nomorRumah', { required: true })}
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
                  {...register('alamat', { required: true })}
                />
              </div>
              <select
                className='form-select mb-3'
                aria-label='Default select example'
                placeholder='Role Anda'
                {...register('role', { required: true })}
              >
                <option selected='true' value='Keluarga'>
                  Role : Keluarga
                </option>

                <option value='RT'>Role : RT</option>
              </select>
              <div className='mb-3'>
                <input
                  placeholder='Token RT'
                  type='text'
                  name='tokenRT'
                  className='form-control'
                  {...register('tokenRT')}
                />
              </div>

              <div className='input-group mb-3'>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control'
                  name='password'
                  id='exampleInputPassword1'
                  {...register('password', { required: true })}
                />
              </div>
              <div className='input-group mb-3'>
                <input
                  placeholder='Konfirmasi Password'
                  type='password'
                  className='form-control'
                  name='password'
                  id='exampleInputPassword1'
                  {...register('password', { required: true })}
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
