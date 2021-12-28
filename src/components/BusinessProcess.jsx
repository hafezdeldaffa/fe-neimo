const BusinessProcess = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <div className='mt-5 py-5'>
            <h4 className='fw-bold'> Bagaimana Neimo Bekerja? </h4>
            <p>
              {' '}
              Aplikasi ini mengandalkan partisipasi masyarakat untuk saling
              membagikan data terkait COVID-19, seperti vaksinasi serta
              kesehatan dari keluarga mereka
            </p>
            <button type='button' class='btn btn-outline-dark px-5'>
              Pelajari
            </button>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='p-5'>
            <img
              src='/images/undraw_Usability_testing_re_uu1g.png'
              width='100%'
              alt='Images'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
