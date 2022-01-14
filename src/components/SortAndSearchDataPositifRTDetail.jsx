import React from 'react';
import Searching from './Searching';
import SortingDataPositifRTDetail from './SortingDataPositifRTDetail';

const SortAndSearchPositifRTDetail = () =>{
    return(
      <div className="container mt-4">
      <div className="row">
        <div className="col-2 col-md-6">
           < SortingDataPositifRTDetail />
        </div>
        <div className="col-10 col-md-6">
            <Searching />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearchPositifRTDetail;