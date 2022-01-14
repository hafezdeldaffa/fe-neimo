import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useLocation} from 'react-router-dom';
import GagalLoginModal from '../components/GagalLoginModal';
import BerhasilDaftarModal from '../components/BerhasilDaftarModal';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const location = useLocation()
  const loc = location.search.split('?')
  const qs = require('qs');
  const obj = qs.parse(loc[1]);

  const [showModal, setShowModal] = useState(false);
  const [showModalBerhasil, setShowModalBerhasil] = useState(false);

  const onSubmit = async (data,e) => {
    e.preventDefault()
    try {
      const login = await axios.post(
        'https://neimo-be.herokuapp.com/auth/login',
        data
      );

      sessionStorage.setItem('token', login.data.token);
      sessionStorage.setItem('role', data.role);

      const role = sessionStorage.getItem('role');
      const token = sessionStorage.getItem('token');

      if (role.length && token.length) {
        window.location.href = '/dashboard';
        // window.alert('Berhasil Login')
      } else {
        window.location.href = '/login';
        // window.alert('gagal melakukan Login')
      }

    } catch (error) {
      if(error.response.status === 401){
        window.location.href = '/login?status=gagalLogin';
      }
      throw error;
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className='container col-xxl-8 px-4 py-sm min-vh-100'>
        <div className='row flex-lg-row align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src='/images/undraw_authentication_fsn5.png'
              className='d-block mx-lg-auto img-fluid'
              alt='Auth'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6 py-5'>
            <h6 className='display-6 fw-bold lh-1 mb-4'>
              Login Untuk Melanjutkan
            </h6>
            <form onSubmit={handleSubmit(onSubmit)} method='post'>
              <div className='mb-3'>
                <input
                  placeholder='Email'
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  {...register('email', { required: true })}
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  autoComplete='on'
                  {...register('password', { required: true })}
                />
              </div>
              <select
                className='form-select mb-3'
                aria-label='Default select example'
                placeholder='Role Anda'
                defaultValue={'Keluarga'}
                {...register('role', { required: true })}
              >
                <option value='Keluarga'>Role : Keluarga</option>
                <option value='RT'>Role : RT</option>
              </select>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ width: '100%' }}
              >
                Masuk
              </button>
            </form>
            <p className='text-center mt-3 text-secondary'>
              Belum memiliki akun?
              <Link
                to={'/signup'}
                className='text-dark fw-bold text-decoration-none'
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>
        {obj.status && obj.status === 'gagalLogin'?
         
         <GagalLoginModal
          show={() => setShowModal(true) }
          data={showModal}
        />
         : null}

         {
           obj.status && obj.status === 'berhasilMendaftar' ?
           <BerhasilDaftarModal
           show={() => setShowModalBerhasil(true) }
           data={showModalBerhasil}
         />
          : null}
        
      </div>
    </React.Fragment>
  );
};

export default Login;
