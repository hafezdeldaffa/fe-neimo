const CardCaseGlobal = ({ positif, meninggal, sembuh }) => {
  console.log(sembuh);
  return (
    <div className='card mb-3 mx-auto mt-5' style={{ maxWidth: '700px' }}>
      <div className='row g-0'>
        <div className='row row-cols-auto'>
          <div className='col mt-2 px-3 align-self-center'>
            <img
              className='rounded mx-auto d-block mt-2'
              src='/images/covid_icon.png'
              alt='People'
              style={{ width: '36px' }}
            />
          </div>
          <div className='col px-6 col-sm-8 mt-4'>
            <h6>Covid Global Data</h6>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Positif</h5>
              <li className='card-text'>{positif.value}</li>
            </div>
          </div>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Sembuh</h5>
              <li className='card-text'>{sembuh.value}</li>
            </div>
          </div>
          <div className='col'>
            <div className='card-body'>
              <h5 className='card-title'>Meninggal</h5>
              <li className='card-text'>{meninggal.value}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCaseGlobal;
