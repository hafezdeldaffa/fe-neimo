const ImageLanding = () => {
  return (
    <div className='container col-xxl-8 px-4 py-sm min-vh-100'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
          <img
            src='/images/social-distancing.png'
            className='d-block mx-lg-auto img-fluid'
            alt='Bootstrap Themes'
            width='100%'
            loading='lazy'
          />
        </div>
        <div className='col-lg-6'>
          <h1 className='display-5 fw-bold lh-1 mb-3'>Pantau Virus Covid-19</h1>
          <p className='lead'>
            Neimo adalah aplikasi pemantauan keadaan COVID-19 di keluarga Anda.
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <button
              type='button'
              id='btn-lp1'
              className='btn btn-lg px-4 me-md-2'
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLanding;
