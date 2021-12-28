const Fitur = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <div className='mt-5 py-5'>
            <h4 className='fw-bold'> Fitur Dari Neimo </h4>
            <p>
              {' '}
              Neimo memberikan kemudahan bagi kepala RT serta masyarakat dalam
              pelacakan COVID-19 di lingkungan sekitar. Fitur yang ditawarkan
              Neimo meliputi :
            </p>
            <ul>
              <li>Laporan Kasus Positif dan Vaksinasi</li>
              <li>Visualisasi Data Statistika Covid-19</li>
              <li>Cari Rumah Sakit dan Ambulans</li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='p-5'>
            <img
              src='/images/undraw_Dropdown_menu_re_jqqs.png'
              width='100%'
              alt='Images'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
