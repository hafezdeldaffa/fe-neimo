import React, { useContext, useEffect } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ServiceInfoDashboard from '../components/ServiceInfoDashboard';
import CardCaseRT from '../components/CardCasesRT';
import { getDailyCases, IndonesiaDailyContext } from '../context/IndonesiaDailyContext';
import ChartIndo from '../components/ChartIndo';
import Loading from '../components/Loading';

const Dashoard = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return <Login />;
  }
  
  const [sidebar] = useContext(SidebarContext);
  const [DailyCases, setDailyCases] = useContext(IndonesiaDailyContext);

  useEffect(() => {
    async function getData() {
      const data = await getDailyCases()
      setDailyCases(data)
    }
    getData()

  }, [setDailyCases])

  return (
    <React.Fragment>
      <Navbar />
      <div className='row'>
        <div className={!sidebar ? 'col-sm-2' : null}></div>
        <div className={!sidebar ? 'col-sm-10' : 'col-sm-12'}>
          <ServiceInfoDashboard></ServiceInfoDashboard>
          <CardCaseRT></CardCaseRT>
          {
            DailyCases && DailyCases.length ?
              <ChartIndo key={DailyCases.length} DailyCases={DailyCases} /> :
              <div className='mt-5'>
                <Loading />
              </div>
              
            }
        </div>
      </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default Dashoard;
