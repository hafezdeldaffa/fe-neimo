import React from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
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
            <form>
              <div className='mb-3'>
                <input
                  placeholder='Email'
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='mb-3'>
                <input
                  placeholder='Password'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='mb-2'>
                <label className='form-check-label fw-bold display-7'>
                  Pilih Role Anda :
                </label>
              </div>
              <div className='form-check form-check-inline mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='rt'
                  id='inlineRadio1'
                  value='RT'
                />
                <label className='form-check-label' for='inlineRadio1'>
                  RT
                </label>
              </div>
              <div className='form-check form-check-inline mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='keluarga'
                  id='inlineRadio2'
                  value='Keluarga'
                />
                <label className='form-check-label' for='inlineRadio2'>
                  Keluarga
                </label>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ width: '100%' }}
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
