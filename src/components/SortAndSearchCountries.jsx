import React, { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import SortCountries from './SortCountries';
import SearchCountries from './SearchCountries';

const SortAndSearchCountries = () =>{
    
  const [CountriesCases] = useContext(CountriesContext);
    return(
      <div className="container mt-4">
      <div className="row">
        <div className="col-2 col-md-6">
          <SortCountries />
        </div>
        <div className="col-10 col-md-6">
          <SearchCountries CountriesCases={CountriesCases} />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearchCountries;