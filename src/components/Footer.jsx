const Footer = () => {
  return (
    <footer
      className=' font-small text-white pt-4'
      style={{ backgroundColor: '#2647bd' }}
    >
      <div className='container text-center text-md-left'>
        <div className='row'>
          <div className='col-md-4 mx-auto'>
            <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>Neimo</h5>
            <p>
              Neimo adalah aplikasi pemantauan keadaan COVID-19 di keluarga
              Anda.
            </p>
          </div>
          <hr className='clearfix w-100 d-md-none'></hr>

          <hr className='clearfix w-100 d-md-none'></hr>

          <div className='col-md-2 mx-auto'>
            <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
              Contact Us
            </h5>

            <ul className='list-unstyled text-white'>
              <li>
                <a className='text-white' href='#!'>
                  Email
                </a>
              </li>
              <li>
                <a className='text-white' href='#!'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='footer-copyright text-center py-3'>
        © 2021 Copyright: Neimo
      </div>
    </footer>
  );
};

export default Footer;
