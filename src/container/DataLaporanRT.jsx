import React, { useContext } from "react";
import { SidebarContext } from '../context/SidebarContext';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SortAndSearchPositifRT from "../components/SortAndSearchDataPositifRT";
import TableLaporanWarga from "../components/TableLaporanWarga";
const DataLaporanRT = () =>{
    const [sidebar] = useContext(SidebarContext);
    return(
        <React.Fragment>
            <Navbar />
            <div className="row">
                <div className={!sidebar ? 'col-sm-2' : null}>
                    
                </div>
                <div className={!sidebar ? 'col-sm-10' : 'col-sm-12'}>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-2 col-md-1'>
                                <img src="/images/report_icon.png" alt="" className="ms-4" style={{ width: '35px' }} />
                            </div>
                            <div className='col-10 col-md-11'>
                                <h2 className='ms-3 ms-md-0 mt-md-0 mt-2'>Data laporan Warga</h2>
                            </div>
                        </div>
                        <SortAndSearchPositifRT ></SortAndSearchPositifRT>
                        <TableLaporanWarga />
                    </div>
                </div>
            </div>
            <Sidebar />
        </React.Fragment>
    )
}

export default DataLaporanRT