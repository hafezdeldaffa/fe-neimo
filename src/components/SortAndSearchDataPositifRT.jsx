import React from 'react';
import Searching from './Searching';
import Sorting from './Sorting';

const SortAndSearchPositifRT = () =>{
    
    return(
      <div className="container mt-4">
      <div className="row">
        <div className="col-2 col-md-6">
          <Sorting />
        </div>
        <div className="col-10 col-md-6">
            <Searching />
        </div>
      </div>
    </div>
    )
}

export default SortAndSearchPositifRT;