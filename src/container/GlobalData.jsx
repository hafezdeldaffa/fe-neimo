import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../context/GlobalContext';
import CountriesDataTable from '../components/CountriesDataTable';
import SortAndSearchCountries from '../components/SortAndSearchCountries';
import CardCaseGlobal from '../components/CardCaseGlobal';

const GlobalData = () => {
  const [...value] = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Navbar />
      <CardCaseGlobal
        key={value.length}
        positif={value[0]}
        meninggal={value[1]}
        sembuh={value[2]}
      />
      <SortAndSearchCountries></SortAndSearchCountries>
      <CountriesDataTable></CountriesDataTable>
    </React.Fragment>
  );
};

export default GlobalData;
