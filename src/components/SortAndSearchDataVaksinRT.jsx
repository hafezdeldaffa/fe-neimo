import React from 'react';
import Searching from './Searching';
import SortingDataVaksinRT from './SortingDataVaksinRT';

const SortAndSearchVaksinRT = () =>{
    return(
      <div className="container mt-4">
      <div className="row">
        <div className="col-2 col-md-6">
           < SortingDataVaksinRT />
        </div>
        <div className="col-10 col-md-6">
            <Searching />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearchVaksinRT;