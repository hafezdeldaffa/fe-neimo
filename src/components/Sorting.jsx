import { useState } from 'react';
import {useLocation} from 'react-router-dom'
const Sorting = () =>{
    let {pathname} = useLocation()
    // const params = {
    //     category: obj.category,
    //   };
    
      const categories = pathname === "/data-positif" ? ['Nama', 'NoRumah', 'JumlahPositif', 'Lama'] : ['Nama', 'NoRumah', 'JumlahTervaksinasi'];
    
      const [category, setCategory] = useState(categories[2]);
    return(
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
              <>
                <li>
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
              </>
            ))}
          </div>
          <li>
            <button
              className='btn btn-sm btn-sort d-flex justify-content-center my-2'
              href='#'
            //   onClick={handleClick}
            >
              Urutkan
            </button>
          </li>
        </ul>
      </div>
    )
}

export default Sorting;