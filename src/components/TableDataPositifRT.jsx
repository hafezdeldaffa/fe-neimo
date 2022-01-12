import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from "react-icons/fi"
import { useContext, useEffect } from 'react';
import {getAxiosWarga, WargaRTContext } from '../context/WargaRTContext';
import Loading from './Loading';
const TableDataPositifRT = () => {
    let location = useLocation()
    const [dataWargaRT, setDataWargaRT] = useContext(WargaRTContext)
    const datakeluargaRT = dataWargaRT ?  dataWargaRT.WargaRT : undefined

    useEffect(async () => {
        const axiosData = await getAxiosWarga()
        setDataWargaRT(axiosData)
    }, [])

    if (datakeluargaRT && datakeluargaRT.length) {
        return (
            <div className="container">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover shadow text-center">
                            <thead className="bg-table text-white">
                                <tr>
                                    <th scope="col" className=" d-none d-sm-block">No</th>
                                    <th scope="col">Kepala Keluarga</th>
                                    <th scope="col">No Rumah</th>
                                    <th scope="col">Jumlah Positif</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datakeluargaRT.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index} key={index}>
                                            <th scope="row" className=" d-none d-sm-block">{index+1}</th>
                                            <td>{element.namaKepalaKeluarga}</td>
                                            <td>{element.nomorRumah}</td>
                                            <td>2</td>
                                            <td><Link to={`${location.pathname}/detail?id=${element._id}`} key={index}><FiIcons.FiZoomIn></FiIcons.FiZoomIn></Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            datakeluargaRT === undefined ?
           <div className='mt-5'>
                <Loading />
           </div> :
            <div className="container">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover shadow text-center">
                            <thead className="bg-table text-white">
                                <tr>
                                    <th scope="col" className=" d-none d-sm-block">No</th>
                                    <th scope="col">Kepala Keluarga</th>
                                    <th scope="col">No Rumah</th>
                                    <th scope="col">Jumlah Positif</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                        </table>
                        <p className='text-center'>data masih kosong</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableDataPositifRT;