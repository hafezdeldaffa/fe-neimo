import React, { useContext } from "react";
import { SidebarContext } from '../context/SidebarContext';
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableLaporanWargaDetail from "../components/TableLaporanWargaDetail";
import Login from "./Login";
const DataLaporanRTDetail = () =>{
    const [sidebar] = useContext(SidebarContext);

    const token = localStorage.getItem('token')
    if(!token){
        return <Login />
    }
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
                            <Link to={`/data-laporan`}><img src="/images/back_icon.png" alt="" className='ms-4' style={{ width: '50px' }} /></Link>
                            </div>
                            <div className='col-10 col-md-11'>
                                <h2 className='ms-3 ms-md-0'>Data laporan Warga / A51</h2>
                            </div>
                        </div>
                        <TableLaporanWargaDetail />
                    </div>
                </div>
            </div>
            <Sidebar />
        </React.Fragment>
    )
}

export default DataLaporanRTDetail