import React, { useContext } from 'react';
import { ProvinceContext } from '../context/ProvinceContext';
import Search from '../components/Search';
import Sort from '../components/Sort';

const SortAndSearch = () =>{
    
  const [ProvCases] = useContext(ProvinceContext);
    return(
      <div className="container mt-4">
      <div className="row">
        <div className="col-2 col-md-6">
          <Sort />
        </div>
        <div className="col-10 col-md-6">
          <Search key={ProvCases.length} ProvCases={ProvCases} />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearch;