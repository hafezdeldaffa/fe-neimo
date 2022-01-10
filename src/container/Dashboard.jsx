import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ServiceInfoDashboard from '../components/ServiceInfoDashboard';
import CardCaseRT from '../components/CardCasesRT';

const Dashoard = () => {
  const [sidebar] = useContext(SidebarContext);

  return (
    <React.Fragment>
      <Navbar />
        <div className="row">
          <div className={!sidebar ? 'col-sm-2' : null}>
          </div>
          <div className={!sidebar ? 'col-sm-10' : 'col-sm-12'}>
          <ServiceInfoDashboard></ServiceInfoDashboard>
          <CardCaseRT></CardCaseRT>
          </div>
        </div>
      <Sidebar />
    </React.Fragment>
  );
};

export default Dashoard;