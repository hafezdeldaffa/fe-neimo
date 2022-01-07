
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi'
const TableDataVaksinRT = () =>{
    let location = useLocation()
    return(
        <div className="container">
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <div className="table-responsive">
                <table className="table table-borderless table-hover shadow text-center">
                    <thead className="bg-table text-white">
                        <tr>
                            <th scope="col" className=" d-none d-sm-block">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">No Rumah</th>
                            <th scope="col">Jumlah Tervasinasi</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                        filtered.map((element, index) => {
                           return(
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">{index+1}</th>
                                <td>{element.attributes.Country_Region}</td>
                                <td>{element.attributes.Confirmed}</td>
                                <td>{element.attributes.Deaths}</td>
                                <td>{element.attributes.Recovered}</td>
                        </tr>
                           )
                        })
                    } */}
                        <tr className="border-1">
                            <th scope="row" className=" d-none d-sm-block">1</th>
                            <td>Agus</td>
                            <td>A5</td>
                            <td>2</td>
                            <td><Link to={`${location.pathname}/detail`}><FiIcons.FiZoomIn></FiIcons.FiZoomIn></Link></td>
                        </tr>
                        <tr className="border-1">
                            <th scope="row" className=" d-none d-sm-block">2</th>
                            <td>Sandi</td>
                            <td>A6</td>
                            <td>2</td>
                            <td><Link to={`${location.pathname}/detail`}><FiIcons.FiZoomIn></FiIcons.FiZoomIn></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
export default TableDataVaksinRT