import React, { useContext } from 'react';
import CardCase from '../components/CardCase';
import Navbar from '../components/Navbar';
import { IndonesiaContext } from '../context/IndonesiaContext';
import ProvinceDataTable from '../components/ProvinceDataTable';
import { ProvinceContext } from '../context/ProvinceContext';
import ChartIndo from '../components/ChartIndo';
import SortAndSearch from '../components/SortAndSearch';
import { IndonesiaDailyContext } from '../context/IndonesiaDailyContext';

const IndonesiaData = () => {
  const [cases] = useContext(IndonesiaContext);
  const [ProvCases] = useContext(ProvinceContext);
  const [DailyCases] = useContext(IndonesiaDailyContext);

  console.log(cases);

  return (
    <React.Fragment>
      <div className='bg-light'>
        <Navbar />
        <CardCase key={cases.length} cases={cases} />;
        <ChartIndo key={DailyCases.length} DailyCases={DailyCases} />
        <SortAndSearch />
        <ProvinceDataTable key={ProvCases.length} ProvCases={ProvCases} />
      </div>
    </React.Fragment>
  );
};

export default IndonesiaData;
