import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SortingDataPositifRTDetail = () =>{
    let location = useLocation()

    const queryString = require('query-string')
    const value = queryString.parse(location.search);
  
    const params = {
      category: value.category,
    };
  
    const categories =  ['Nama', 'Status', 'Tanggal']
  
    const [category, setCategory] = useState(params.category || categories[2]);
    
    let navigate = useNavigate();
    function handleClick() {
      navigate(`${location.pathname}?id=${value.id}&category=${category}`);
    }
  
    return (
      <div className='btn-group my-3'>
        <img
          className='sort-img'
          data-bs-toggle='dropdown'
          src='/images/equalizer.png'
          alt='sort'
        ></img>
        <ul className='dropdown-menu px-3'>
          <div className='form-check'>
            {categories.map((c, index) => (
                <li key={index}>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    key={index}
                    id={c}
                    onChange={() => setCategory(c)}
                    defaultValue={category}
                  />
                  <label className='form-check-label' htmlFor={c}>
                    {c}
                  </label>
                </li>
            ))}
          </div>
          <li>
            <button
              className='btn btn-sm btn-sort d-flex justify-content-center my-2'
              href='#'
              onClick={handleClick}
            >
              Urutkan
            </button>
          </li>
        </ul>
      </div>
    )
}

export default SortingDataPositifRTDetail;