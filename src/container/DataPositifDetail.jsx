import React, { useContext } from "react"
import { SidebarContext } from '../context/SidebarContext';
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SortAndSearchPositifRT from "../components/SortAndSearchDataPositifRT";
import TableDataPositifDetail from "../components/TableDataPositifDetail";
const DataPositifDetail = () =>{
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
                            <Link to={`/data-positif`}><img src="/images/back_icon.png" alt="" className='ms-4' style={{ width: '50px' }} /></Link>
                            </div>
                            <div className='col-10 col-md-11'>
                                <h2 className='ms-3 ms-md-0 mt-2 mt-md-0'>Data Positif di RT / A51</h2>
                            </div>
                        </div>
                        <SortAndSearchPositifRT ></SortAndSearchPositifRT>
                        <TableDataPositifDetail />
                    </div>
                </div>
            </div>
            <Sidebar />
        </React.Fragment>
    )
}

export default DataPositifDetail