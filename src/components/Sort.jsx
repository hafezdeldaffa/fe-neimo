import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sort = () => {
  let location = useLocation();

  const loc = location.search.split('?');
  const qs = require('qs');
  const obj = qs.parse(loc[1]);

  const params = {
    category: obj.category,
  };

  const categories = ['Province', 'Death', 'Positive', 'Recovered'];

  const [category, setCategory] = useState(params.category || categories[2]);

  let navigate = useNavigate();
  function handleClick() {
    navigate(`/indonesia/?category=${category}`);
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
          {categories.map((c) => (
            <>
              <li>
                <input
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id={c}
                  onChange={() => setCategory(c)}
                  defaultValue={category}
                />
                <label className='form-check-label' htmlFor={c}>
                  {c}
                </label>
              </li>
            </>
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
  );
};

export default Sort;
