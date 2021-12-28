import { useLocation } from 'react-router';
const ProvinceDataTable = ({ ...data }) => {
  let location = useLocation();

  const loc = location.search.split('?');
  const qs = require('qs');
  const obj = qs.parse(loc[1]);

  const categories = ['Province', 'Positive', 'Death', 'Recovered'];

  const params = {
    category: obj.category,
  };

  const filter = {
    category: params.category || categories[1],
  };

  const filtered = data.ProvCases.sort((a, b) =>
    filter.category === 'Province'
      ? a.provinsi > b.provinsi
        ? 1
        : -1
      : filter.category === 'Positive'
      ? a.kasus > b.kasus
        ? -1
        : 1
      : filter.category === 'Death'
      ? a.meninggal > b.meninggal
        ? -1
        : 1
      : a.sembuh > b.sembuh
      ? -1
      : 1
  );

  return (
    <div className='container'>
      <div class='table-wrapper-scroll-y my-custom-scrollbar'>
        <div className='table-responsive'>
          <table className='table table-borderless table-hover shadow table-fixed'>
            <thead className='bg-table text-white'>
              <tr>
                <th scope='col' className=' d-none d-sm-block sticky-top'>
                  No
                </th>
                <th scope='col' className='sticky-top'>
                  Provinsi
                </th>
                <th scope='col' className='sticky-top'>
                  Positif
                </th>
                <th scope='col' className='sticky-top'>
                  Dirawat
                </th>
                <th scope='col' className='sticky-top'>
                  Sembuh
                </th>
                <th scope='col' className='sticky-top'>
                  Meninggal
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((element, index) => {
                return (
                  <tr className='border-1'>
                    <th scope='row' className=' d-none d-sm-block'>
                      {index + 1}
                    </th>
                    <td>{element.provinsi}</td>
                    <td>{element.kasus}</td>
                    <td>{element.dirawat}</td>
                    <td>{element.sembuh}</td>
                    <td>{element.meninggal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProvinceDataTable;
